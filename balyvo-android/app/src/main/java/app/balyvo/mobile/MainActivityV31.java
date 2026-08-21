package app.balyvo.mobile;

import android.graphics.*;
import android.graphics.drawable.GradientDrawable;
import android.text.Spannable;
import android.text.SpannableString;
import android.text.style.ForegroundColorSpan;
import android.util.Base64;
import android.view.*;
import android.widget.*;
import java.io.*;

public class MainActivityV31 extends MainActivityV3 {

  private Bitmap loadVerifiedHero(){
    try{
      int[] ids={R.raw.hero_a,R.raw.hero_b,R.raw.hero_c,R.raw.hero_d,R.raw.hero_e,R.raw.hero_f};
      StringBuilder encoded=new StringBuilder(8600);
      for(int id:ids){
        BufferedReader br=new BufferedReader(new InputStreamReader(getResources().openRawResource(id)));
        String line;
        while((line=br.readLine())!=null) encoded.append(line.trim());
        br.close();
      }
      byte[] image=Base64.decode(encoded.toString(),Base64.DEFAULT);
      return BitmapFactory.decodeByteArray(image,0,image.length);
    }catch(Exception e){
      return null;
    }
  }

  @Override void splash(){
    FrameLayout root=new FrameLayout(this);
    root.setBackgroundColor(NIGHT);

    ImageView hero=new ImageView(this);
    hero.setScaleType(ImageView.ScaleType.CENTER_CROP);
    Bitmap bm=loadVerifiedHero();
    if(bm!=null) hero.setImageBitmap(bm);
    root.addView(hero,new FrameLayout.LayoutParams(-1,-1));

    View shade=new View(this);
    GradientDrawable gradient=new GradientDrawable(GradientDrawable.Orientation.TOP_BOTTOM,
        new int[]{0x11050807,0x22050807,0xAA050807,0xFF050807});
    shade.setBackground(gradient);
    root.addView(shade,new FrameLayout.LayoutParams(-1,-1));

    LinearLayout brand=row();
    brand.setGravity(Gravity.CENTER_VERTICAL);
    ImageView icon=new ImageView(this);
    icon.setImageResource(R.drawable.ic_balyvo);
    brand.addView(icon,new LinearLayout.LayoutParams(dp(54),dp(54)));
    LinearLayout brandText=col();
    LinearLayout.LayoutParams btp=new LinearLayout.LayoutParams(0,-2,1);btp.leftMargin=dp(10);
    brand.addView(brandText,btp);
    brandText.addView(txt("Balyvo",23,TEXT,true),match());
    brandText.addView(txt("NUTRIÇÃO PARA A VIDA REAL",8,NEON,true),match());
    TextView version=txt("PREMIUM 0.3.1",8,NIGHT,true);
    version.setGravity(Gravity.CENTER);
    version.setPadding(dp(10),dp(6),dp(10),dp(6));
    version.setBackground(bg(NEON,99,0,0));
    brand.addView(version,wrap());
    FrameLayout.LayoutParams brandLp=new FrameLayout.LayoutParams(-1,-2,Gravity.TOP);
    brandLp.setMargins(dp(24),dp(30),dp(24),0);
    root.addView(brand,brandLp);

    LinearLayout content=col();
    content.setPadding(dp(26),dp(20),dp(26),dp(28));

    SpannableString title=new SpannableString("Boas escolhas hoje,\nresultados amanhã.");
    int start=title.toString().indexOf("resultados");
    title.setSpan(new ForegroundColorSpan(NEON),start,start+10,Spannable.SPAN_EXCLUSIVE_EXCLUSIVE);
    TextView headline=txt("",31,TEXT,true);headline.setText(title);
    content.addView(headline,match());

    TextView sub=txt("Pratos brasileiros, calorias, macros, água e evolução em um só lugar.",12,SOFT,false);
    LinearLayout.LayoutParams subp=match();subp.topMargin=dp(10);
    content.addView(sub,subp);

    LinearLayout indicators=row();
    LinearLayout.LayoutParams ip=match();ip.topMargin=dp(20);ip.bottomMargin=dp(20);
    content.addView(indicators,ip);
    for(int i=0;i<4;i++){
      View bar=new View(this);bar.setBackground(bg(i==0?NEON:LINE,99,0,0));
      LinearLayout.LayoutParams bp=new LinearLayout.LayoutParams(i==0?dp(42):dp(27),dp(5));bp.rightMargin=dp(7);
      indicators.addView(bar,bp);
    }

    TextView startButton=txt("Começar",16,NIGHT,true);
    startButton.setGravity(Gravity.CENTER);
    startButton.setBackground(bg(NEON,24,0,0));
    startButton.setOnClickListener(v->shell());
    content.addView(startButton,new LinearLayout.LayoutParams(-1,dp(58)));

    TextView proof=txt("VISUAL NOVO ATIVO · BUILD 0.3.1",8,SOFT,true);
    proof.setGravity(Gravity.CENTER);
    LinearLayout.LayoutParams pp=match();pp.topMargin=dp(12);
    content.addView(proof,pp);

    FrameLayout.LayoutParams clp=new FrameLayout.LayoutParams(-1,-2,Gravity.BOTTOM);
    root.addView(content,clp);

    setContentView(root);
    root.setAlpha(0f);
    root.animate().alpha(1f).setDuration(350).start();
  }

  @Override View home(){
    ScrollView s=(ScrollView)super.home();
    LinearLayout q=(LinearLayout)s.getChildAt(0);
    TextView audit=txt("NOVO VISUAL · v0.3.1 PREMIUM",9,NIGHT,true);
    audit.setGravity(Gravity.CENTER);
    audit.setPadding(dp(12),dp(8),dp(12),dp(8));
    audit.setBackground(bg(NEON,99,0,0));
    LinearLayout.LayoutParams ap=match();ap.bottomMargin=dp(14);
    q.addView(audit,0,ap);
    return s;
  }
}
