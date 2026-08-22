package app.balyvo.mobile;

import android.app.*;
import android.content.*;
import android.graphics.*;
import android.graphics.drawable.*;
import android.net.Uri;
import android.view.*;
import android.widget.*;
import androidx.core.content.FileProvider;
import java.io.*;
import java.text.*;
import java.util.*;

/** Balyvo 0.5.0 — base de distribuição com compartilhamento local e privacidade. */
public class MainActivityV5 extends MainActivityV41 {
  private static final String[] SHARE_FIELDS={"Calorias","Água","Sequência","Meta atingida","Peso","IMC"};

  @Override View home(){
    ScrollView s=(ScrollView)super.home();
    LinearLayout q=(LinearLayout)s.getChildAt(0);

    TextView title=txt("Compartilhar",18,TEXT,true);
    LinearLayout.LayoutParams tlp=match();tlp.topMargin=dp(24);q.addView(title,tlp);
    TextView hint=txt("Gere um card no próprio aparelho e compartilhe pelo Android. Funciona mesmo sem internet.",10,SOFT,false);
    LinearLayout.LayoutParams hlp=match();hlp.topMargin=dp(4);q.addView(hint,hlp);

    LinearLayout tools=row();
    LinearLayout.LayoutParams toolsLp=match();toolsLp.topMargin=dp(12);q.addView(tools,toolsLp);
    TextView shareApp=actionCard("↗","Compartilhar Balyvo","Convide pelo Android");
    shareApp.setOnClickListener(v->shareBalyvo());
    tools.addView(shareApp,new LinearLayout.LayoutParams(0,dp(92),1));
    spacer(tools,10);
    TextView shareProgress=actionCard("▣","Meu progresso","Card com privacidade");
    shareProgress.setOnClickListener(v->privacyDialog(false));
    tools.addView(shareProgress,new LinearLayout.LayoutParams(0,dp(92),1));

    String ach=currentAchievement();
    LinearLayout achievement=card();
    LinearLayout.LayoutParams alp=match();alp.topMargin=dp(15);q.addView(achievement,alp);
    achievement.addView(txt("CONQUISTA",9,NEON,true),match());
    TextView av=txt(ach,18,TEXT,true);LinearLayout.LayoutParams avp=match();avp.topMargin=dp(5);achievement.addView(av,avp);
    TextView ab=txt("Compartilhar conquista",11,NEON,true);ab.setGravity(Gravity.CENTER);ab.setPadding(dp(12),dp(11),dp(12),dp(11));ab.setBackground(bg(SURFACE2,16,LINE,1));
    LinearLayout.LayoutParams abp=match();abp.topMargin=dp(12);achievement.addView(ab,abp);ab.setOnClickListener(v->privacyDialog(true));
    return s;
  }

  @Override View progress(){
    ScrollView s=(ScrollView)super.progress();
    LinearLayout q=(LinearLayout)s.getChildAt(0);
    TextView share=button("Compartilhar meu progresso");
    share.setOnClickListener(v->privacyDialog(false));
    LinearLayout.LayoutParams lp=match();lp.topMargin=dp(18);lp.bottomMargin=dp(18);q.addView(share,lp);
    return s;
  }

  private void shareBalyvo(){
    String text="Conheça o Balyvo.\n\nNutrição para a vida real. Controle refeições, calorias, água e evolução em um só lugar.\n\nBalyvo — Sua comida. Seu controle. Seu progresso.";
    Intent send=new Intent(Intent.ACTION_SEND);send.setType("text/plain");send.putExtra(Intent.EXTRA_TEXT,text);
    startActivity(Intent.createChooser(send,"Compartilhar Balyvo"));
  }

  private void privacyDialog(boolean achievementOnly){
    boolean[] checked={true,true,true,true,false,false};
    AlertDialog dialog=new AlertDialog.Builder(this)
      .setTitle(achievementOnly?"Compartilhar conquista":"O que deseja mostrar?")
      .setMessage("Peso e IMC ficam desmarcados por padrão para proteger sua privacidade.")
      .setMultiChoiceItems(SHARE_FIELDS,checked,(d,which,isChecked)->checked[which]=isChecked)
      .setNegativeButton("Cancelar",null)
      .setPositiveButton("Gerar card",null).create();
    dialog.setOnShowListener(x->dialog.getButton(AlertDialog.BUTTON_POSITIVE).setOnClickListener(v->{dialog.dismiss();shareProgress(checked,achievementOnly);}));
    dialog.show();
  }

  private void shareProgress(boolean[] show,boolean achievementOnly){
    try{
      String ach=currentAchievement();
      Bitmap card=createShareCard(show,achievementOnly,ach);
      File dir=new File(getCacheDir(),"share");if(!dir.exists())dir.mkdirs();
      File out=new File(dir,achievementOnly?"balyvo-conquista.png":"balyvo-progresso.png");
      FileOutputStream fos=new FileOutputStream(out);card.compress(Bitmap.CompressFormat.PNG,100,fos);fos.flush();fos.close();
      Uri uri=FileProvider.getUriForFile(this,getPackageName()+".files",out);
      Intent send=new Intent(Intent.ACTION_SEND);send.setType("image/png");send.putExtra(Intent.EXTRA_STREAM,uri);send.putExtra(Intent.EXTRA_TEXT,shareText(show,achievementOnly,ach));send.addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION);
      startActivity(Intent.createChooser(send,achievementOnly?"Compartilhar conquista":"Compartilhar progresso"));
    }catch(Exception e){
      Toast.makeText(this,"Não foi possível gerar o card agora.",Toast.LENGTH_SHORT).show();
    }
  }

  private String shareText(boolean[] show,boolean achievementOnly,String ach){
    StringBuilder b=new StringBuilder();
    b.append(achievementOnly?"Minha conquista no Balyvo\n":"Meu dia no Balyvo\n");
    if(achievementOnly)b.append(ach).append("\n");
    if(show[0])b.append("🍽 ").append(todayCalories()).append(" kcal consumidas\n");
    if(show[1])b.append("💧 ").append(waterText()).append(" de água\n");
    if(show[2])b.append("🔥 ").append(streak()).append(" dias de consistência\n");
    if(show[3])b.append(todayCalories()>0&&todayCalories()<=goal()?"🎯 Dentro da meta\n":"🎯 Meta diária: "+goal()+" kcal\n");
    if(show[4])b.append("⚖ ").append(f1(weight())).append(" kg\n");
    if(show[5])b.append("◎ IMC ").append(f1(bmi())).append("\n");
    b.append("\nBalyvo — Nutrição para a vida real");
    return b.toString();
  }

  private Bitmap createShareCard(boolean[] show,boolean achievementOnly,String achievement){
    final int W=1080,H=1350;Bitmap bm=Bitmap.createBitmap(W,H,Bitmap.Config.ARGB_8888);Canvas c=new Canvas(bm);
    Paint p=new Paint(Paint.ANTI_ALIAS_FLAG);LinearGradient grad=new LinearGradient(0,0,W,H,Color.rgb(5,8,7),Color.rgb(16,31,23),Shader.TileMode.CLAMP);p.setShader(grad);c.drawRect(0,0,W,H,p);p.setShader(null);
    p.setColor(0xFFBDFD44);c.drawRoundRect(72,72,190,190,30,30,p);p.setColor(0xFF07100B);p.setTextSize(82);p.setTypeface(Typeface.DEFAULT_BOLD);c.drawText("B",98,163,p);
    p.setColor(Color.WHITE);p.setTextSize(54);p.setTypeface(Typeface.DEFAULT_BOLD);c.drawText("Balyvo",220,133,p);p.setColor(0xFFBDFD44);p.setTextSize(24);c.drawText("NUTRIÇÃO PARA A VIDA REAL",220,174,p);
    p.setColor(0xFFA2ADA6);p.setTextSize(24);p.setTypeface(Typeface.DEFAULT);c.drawText(new SimpleDateFormat("dd 'de' MMMM 'de' yyyy",new Locale("pt","BR")).format(new Date()),72,246,p);

    p.setColor(Color.WHITE);p.setTypeface(Typeface.DEFAULT_BOLD);p.setTextSize(58);String heading=achievementOnly?"Conquista desbloqueada":"Meu progresso de hoje";c.drawText(heading,72,340,p);
    if(achievementOnly){p.setColor(0xFFBDFD44);p.setTextSize(36);drawWrapped(c,p,achievement,72,405,920,46);}

    ArrayList<String[]> metrics=new ArrayList<>();
    if(show[0])metrics.add(new String[]{"CALORIAS",todayCalories()+" kcal"});
    if(show[1])metrics.add(new String[]{"ÁGUA",waterText()});
    if(show[2])metrics.add(new String[]{"SEQUÊNCIA",streak()+" dias"});
    if(show[3])metrics.add(new String[]{"META",todayCalories()>0&&todayCalories()<=goal()?"Dentro da meta":goal()+" kcal"});
    if(show[4])metrics.add(new String[]{"PESO",f1(weight())+" kg"});
    if(show[5])metrics.add(new String[]{"IMC",f1(bmi())});
    if(metrics.isEmpty())metrics.add(new String[]{"BALYVO","Consistência todos os dias"});

    float y=achievementOnly?520:430;float boxW=444,boxH=150,gap=28;
    for(int i=0;i<metrics.size();i++){
      int col=i%2,row=i/2;float x=72+col*(boxW+gap),yy=y+row*(boxH+gap);
      p.setColor(0xFF121A17);c.drawRoundRect(x,yy,x+boxW,yy+boxH,28,28,p);
      p.setColor(0xFFA2ADA6);p.setTextSize(22);p.setTypeface(Typeface.DEFAULT_BOLD);c.drawText(metrics.get(i)[0],x+28,yy+48,p);
      p.setColor(0xFFBDFD44);p.setTextSize(39);c.drawText(metrics.get(i)[1],x+28,yy+108,p);
    }

    p.setColor(0xFF25302B);c.drawRoundRect(72,1185,1008,1191,3,3,p);p.setColor(Color.WHITE);p.setTextSize(30);p.setTypeface(Typeface.DEFAULT_BOLD);c.drawText("Sua comida. Seu controle. Seu progresso.",72,1255,p);p.setColor(0xFFA2ADA6);p.setTextSize(21);p.setTypeface(Typeface.DEFAULT);c.drawText("Gerado no Balyvo",72,1300,p);
    return bm;
  }

  private void drawWrapped(Canvas c,Paint p,String text,float x,float y,float maxWidth,float lineHeight){
    String[] words=text.split(" ");String line="";float yy=y;
    for(String w:words){String test=line.isEmpty()?w:line+" "+w;if(p.measureText(test)>maxWidth&&!line.isEmpty()){c.drawText(line,x,yy,p);yy+=lineHeight;line=w;}else line=test;}
    if(!line.isEmpty())c.drawText(line,x,yy,p);
  }

  private String waterText(){int ml=waterMl();return ml<1000?ml+" ml":String.format(new Locale("pt","BR"),"%.1f L",ml/1000f);}

  private String currentAchievement(){
    if(streak()>=7)return "🔥 "+streak()+" dias de consistência";
    if(waterMl()>=3000)return "💧 Meta de água atingida";
    if(todayCalories()>0&&todayCalories()<=goal())return "🎯 Dia dentro da meta";
    if(streak()>=3)return "🔥 "+streak()+" dias seguindo seu plano";
    return "✨ Continue registrando para liberar novas conquistas";
  }
}
