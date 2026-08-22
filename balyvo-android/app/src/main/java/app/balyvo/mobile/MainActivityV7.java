package app.balyvo.mobile;

import android.app.*;
import android.os.*;
import android.content.*;
import android.graphics.*;
import android.graphics.drawable.*;
import android.net.Uri;
import android.provider.MediaStore;
import android.util.Base64;
import android.view.*;
import android.widget.*;
import androidx.core.content.FileProvider;
import com.google.mlkit.vision.common.InputImage;
import com.google.mlkit.vision.label.ImageLabel;
import com.google.mlkit.vision.label.ImageLabeler;
import com.google.mlkit.vision.label.ImageLabeling;
import com.google.mlkit.vision.label.defaults.ImageLabelerOptions;
import org.json.*;
import java.io.*;
import java.text.*;
import java.util.*;

/**
 * Balyvo 0.7.0 — camada de valor de produto.
 * Balyvo Daily, Score, recomendacoes, analise local, planejamento semanal,
 * analise de prato por imagem no dispositivo, Stories, desafios e PT-BR/EN.
 */
public class MainActivityV7 extends MainActivityV6 {
  private static final int REQ_PLATE_CAMERA=7307;
  private static final String KEY_LANG="app_language_v1";
  private static final String KEY_UNITS="app_units_v1";
  private static final String KEY_PLAN="weekly_plan_v1";
  private static final String KEY_CHALLENGE="challenge_current_v1";
  private static final String KEY_NICK="challenge_nickname_v1";
  private Bitmap lastPlateBitmap;

  // ---------- Language / localization ----------
  private boolean english(){
    String set=p==null?"auto":p.getString(KEY_LANG,"auto");
    if("en".equals(set))return true;
    if("pt".equals(set))return false;
    return "en".equalsIgnoreCase(Locale.getDefault().getLanguage());
  }

  private boolean imperial(){
    String set=p==null?"auto":p.getString(KEY_UNITS,"auto");
    if("imperial".equals(set))return true;
    if("metric".equals(set))return false;
    return english()&&"US".equalsIgnoreCase(Locale.getDefault().getCountry());
  }

  String i18n(String s){
    if(s==null||!english())return s;
    switch(s){
      case "NUTRIÇÃO PARA A VIDA REAL":return "NUTRITION FOR REAL LIFE";
      case "Sua comida. Seu controle. Seu progresso.":return "Your food. Your control. Your progress.";
      case "Começar":return "Start";
      case "Hoje":return "Today";
      case "Pratos":return "Meals";
      case "Diário":return "Diary";
      case "Evolução":return "Progress";
      case "Progresso":return "Progress";
      case "Todos":return "All";
      case "Favoritos":return "Favorites";
      case "Brasileiro":return "Brazilian";
      case "Massas":return "Pasta";
      case "Ovos":return "Eggs";
      case "Carnes":return "Meat";
      case "Frango":return "Chicken";
      case "Peixes":return "Fish";
      case "Frutos do mar":return "Seafood";
      case "Churrasco":return "Barbecue";
      case "Personalizado":return "Custom";
      case "Registro manual":return "Manual entry";
      case "Manual":return "Manual";
      case "Café da manhã":return "Breakfast";
      case "Almoço":return "Lunch";
      case "Lanche":return "Snack";
      case "Jantar":return "Dinner";
      case "Ceia":return "Late snack";
      case "Pequeno":return "Small";
      case "Normal":return "Regular";
      case "Grande":return "Large";
      case "Cancelar":return "Cancel";
      case "Continuar":return "Continue";
      case "Salvar":return "Save";
      case "Agora não":return "Not now";
      case "Restaurar compra":return "Restore purchase";
      case "Pro ativo":return "Pro active";
      case "Compartilhar":return "Share";
      case "Compartilhar Balyvo":return "Share Balyvo";
      case "Meu progresso":return "My progress";
      case "Compartilhar meu progresso":return "Share my progress";
      case "Compartilhar conquista":return "Share achievement";
      case "CONQUISTA":return "ACHIEVEMENT";
      case "Meta":return "Goal";
      case "Restantes":return "Remaining";
      case "Peso atual":return "Current weight";
      case "IMC atual":return "Current BMI";
      case "IMC":return "BMI";
      case "PESO ATUAL":return "CURRENT WEIGHT";
      case "LEITURA DO IMC":return "BMI REFERENCE";
      case "Registrar peso":return "Log weight";
      case "Editar perfil":return "Edit profile";
      case "CALORIAS":return "CALORIES";
      case "CALORIAS RESTANTES":return "CALORIES LEFT";
      case "Macros de hoje":return "Today's macros";
      case "PROTEÍNA":return "PROTEIN";
      case "CARBO":return "CARBS";
      case "GORDURA":return "FAT";
      case "HIDRATAÇÃO":return "HYDRATION";
      case "Sugestão inteligente":return "Smart suggestion";
      case "Últimas refeições":return "Latest meals";
      case "Adicionar refeição":return "Add meal";
      case "Repetir última":return "Repeat last";
      case "Registro manual":return "Manual entry";
      case "BIBLIOTECA BRASILEIRA":return "REAL FOOD LIBRARY";
      case "O que entrou no prato?":return "What was on your plate?";
      case "Nenhum prato encontrado.":return "No meals found.";
      case "DIÁRIO":return "DIARY";
      case "EVOLUÇÃO":return "PROGRESS";
      case "Seu Pro está liberado.":return "Your Pro is unlocked.";
      case "Assinatura ativa pela Google Play.":return "Active subscription through Google Play.";
      case "Gerenciar Pro":return "Manage Pro";
      case "Último dia do seu Pro.":return "Last day of your Pro trial.";
      case "Seu período de teste termina amanhã.":return "Your trial ends tomorrow.";
      case "Explore os recursos Pro antes de decidir.":return "Explore all Pro features before deciding.";
      case "Ver Balyvo Pro":return "View Balyvo Pro";
      case "5 DIAS GRÁTIS":return "5 DAYS FREE";
      case "Experimente o Balyvo Pro.":return "Try Balyvo Pro.";
      case "Começar 5 dias grátis":return "Start 5 free days";
      case "TESTE PRO ENCERRADO":return "PRO TRIAL ENDED";
      case "Continue com o Balyvo Pro.":return "Continue with Balyvo Pro.";
      case "Ver assinatura":return "View subscription";
      case "BALYVO PRO ATIVO":return "BALYVO PRO ACTIVE";
      case "BALYVO PRO · TESTE GRÁTIS":return "BALYVO PRO · FREE TRIAL";
      case "BALYVO PRO":return "BALYVO PRO";
      case "Abaixo do peso":return "Below reference range";
      case "Faixa considerada adequada":return "Reference range";
      case "Sobrepeso":return "Above reference range";
      case "Obesidade grau I":return "BMI class I";
      case "Obesidade grau II":return "BMI class II";
      case "Obesidade grau III":return "BMI class III";
      case "Seu dia começa aqui":return "Your day starts here";
    }
    String r=s;
    String[][] rep={
      {"HOJE · ","TODAY · "},{" dias de Pro liberados."," days of Pro unlocked."},{" dias de consistência"," day streak"},
      {" dias seguindo seu plano"," days following your plan"},{" kcal consumidas"," kcal consumed"},{" kcal/dia"," kcal/day"},
      {"Meta kcal/dia","Calorie goal/day"},{"Cabe no seu saldo · ","Fits your remaining calories · "},
      {"Consumidas  ","Consumed  "},{"de ","of "},{"Peso-meta","Goal weight"},{"Meta: ","Goal: "},
      {"Compartilhar progresso","Share progress"},{"Convide pelo Android","Invite from Android"},{"Card com privacidade","Privacy-controlled card"},
      {"Seus pratos salvos","Your saved meals"},{"Nome + calorias","Name + calories"},{"Adicionar refeição","Add meal"},
      {"200 pratos brasileiros","200+ real meals"},{"1 toque para registrar","Log in one tap"},{"estimativa pela composição dos pratos registrados","estimated from your logged meals"},
      {"Busque, favorite ou registre manualmente em segundos.","Search, favorite or log manually in seconds."},
      {"Buscar arroz, frango, macarrão...","Search rice, chicken, pasta..."},{"Registrar alimento/calorias manualmente","Log food/calories manually"},
      {"Nenhum favorito ainda. Toque na estrela de um prato para salvar.","No favorites yet. Tap a star to save a meal."},
      {"Sua semana, sem achismo.","Your week, clearly."},{"Veja tendência, média e consistência — não só um dia isolado.","See trends, averages and consistency — not just one day."},
      {"MÉDIA","AVERAGE"},{"DIAS ATIVOS","ACTIVE DAYS"},{"Consistência deixa rastros.","Consistency leaves a trail."},
      {"Gere um card no próprio aparelho e compartilhe pelo Android. Funciona mesmo sem internet.","Generate a card on your phone and share it through Android. Card generation works offline."},
      {"Meta de água atingida","Water goal reached"},{"Dia dentro da meta","Day within goal"},
      {"Continue registrando para liberar novas conquistas","Keep logging to unlock new achievements"},
      {"Coma de verdade.","Eat real food."},{"Evolua todos os dias.","Make progress every day."},
      {"SEU DIA, NO CONTROLE","YOUR DAY, IN CONTROL"},{"Coma bem.","Eat well."},{"Continue evoluindo.","Keep moving forward."},
      {"Arroz","Rice"},{"arroz","rice"},{"Feijão","Beans"},{"feijão","beans"},{"Frango","Chicken"},{"frango","chicken"},
      {"Carne moída","Ground beef"},{"carne moída","ground beef"},{"Carne","Beef"},{"carne","beef"},{"Bife","Steak"},{"bife","steak"},
      {"Ovos","Eggs"},{"ovos","eggs"},{"Ovo","Egg"},{"ovo","egg"},{"Omelete","Omelet"},{"omelete","omelet"},
      {"Macarrão","Pasta"},{"macarrão","pasta"},{"Lasanha","Lasagna"},{"lasanha","lasagna"},{"Salada","Salad"},{"salada","salad"},
      {"Batata-doce","Sweet potato"},{"batata-doce","sweet potato"},{"Peixe","Fish"},{"peixe","fish"},{"Tilápia","Tilapia"},{"tilápia","tilapia"},
      {"Salmão","Salmon"},{"salmão","salmon"},{"Sardinha","Sardines"},{"sardinha","sardines"},{"Camarão","Shrimp"},{"camarão","shrimp"},
      {"Lula","Squid"},{"lula","squid"},{"Churrasco","Barbecue"},{"churrasco","barbecue"},{"Pão","Bread"},{"pão","bread"},
      {"grelhado","grilled"},{"grelhada","grilled"},{"assado","roasted"},{"assada","roasted"},{"frito","fried"},{"frita","fried"},
      {" com "," with "},{" e "," and "},{"Porção","Serving"},{"porção","serving"},{"caseira","homestyle"}
    };
    for(String[] x:rep)r=r.replace(x[0],x[1]);
    if(imperial())r=convertUnitsInText(r);
    return r;
  }

  private String convertUnitsInText(String s){
    try{
      java.util.regex.Matcher m=java.util.regex.Pattern.compile("([0-9]+(?:[.,][0-9]+)?) kg").matcher(s);
      StringBuffer out=new StringBuffer();
      while(m.find()){
        double kg=Double.parseDouble(m.group(1).replace(',','.'));String lb=String.format(Locale.US,"%.1f lb",kg*2.2046226218);
        m.appendReplacement(out,java.util.regex.Matcher.quoteReplacement(lb));
      }
      m.appendTail(out);return out.toString();
    }catch(Exception e){return s;}
  }

  @Override TextView txt(String s,float z,int c,boolean b){return super.txt(i18n(s),z,c,b);}

  private void translateTree(View v){
    if(v instanceof EditText){EditText e=(EditText)v;if(e.getHint()!=null)e.setHint(i18n(e.getHint().toString()));}
    if(v instanceof ViewGroup){ViewGroup g=(ViewGroup)v;for(int i=0;i<g.getChildCount();i++)translateTree(g.getChildAt(i));}
  }

  // ---------- Localized welcome ----------
  @Override void splash(){
    if(!english()){super.splash();return;}
    FrameLayout root=new FrameLayout(this);root.setBackgroundColor(NIGHT);
    Bitmap hero=loadHeroV7();
    if(hero!=null){ImageView iv=new ImageView(this);iv.setImageBitmap(hero);iv.setScaleType(ImageView.ScaleType.CENTER_CROP);root.addView(iv,new FrameLayout.LayoutParams(-1,-1));}
    View shade=new View(this);GradientDrawable grad=new GradientDrawable(GradientDrawable.Orientation.TOP_BOTTOM,new int[]{0x20050807,0x70050807,0xF8050807});shade.setBackground(grad);root.addView(shade,new FrameLayout.LayoutParams(-1,-1));
    LinearLayout top=row();top.setGravity(Gravity.CENTER_VERTICAL);ImageView icon=new ImageView(this);icon.setImageResource(R.drawable.ic_balyvo);top.addView(icon,new LinearLayout.LayoutParams(dp(52),dp(52)));LinearLayout bt=col();LinearLayout.LayoutParams btp=new LinearLayout.LayoutParams(0,-2,1);btp.leftMargin=dp(10);top.addView(bt,btp);bt.addView(txt("Balyvo",23,TEXT,true),match());bt.addView(txt("NUTRITION FOR REAL LIFE",8,NEON,true),match());FrameLayout.LayoutParams topLp=new FrameLayout.LayoutParams(-1,-2,Gravity.TOP);topLp.setMargins(dp(24),dp(30),dp(24),0);root.addView(top,topLp);
    LinearLayout content=col();content.setPadding(dp(26),dp(20),dp(26),dp(30));content.addView(txt("REAL LIFE NUTRITION",9,NEON,true),match());TextView title=txt("Better choices today.\nProgress that lasts.",32,TEXT,true);LinearLayout.LayoutParams tp=match();tp.topMargin=dp(7);content.addView(title,tp);TextView sub=txt("Real meals, calories, macros, water and daily guidance in one place.",12,SOFT,false);LinearLayout.LayoutParams sp=match();sp.topMargin=dp(10);sp.bottomMargin=dp(20);content.addView(sub,sp);TextView start=txt("Start",16,NIGHT,true);start.setGravity(Gravity.CENTER);start.setBackground(bg(NEON,24,0,0));start.setOnClickListener(v->shell());content.addView(start,new LinearLayout.LayoutParams(-1,dp(58)));FrameLayout.LayoutParams cp=new FrameLayout.LayoutParams(-1,-2,Gravity.BOTTOM);root.addView(content,cp);setContentView(root);
  }

  private Bitmap loadHeroV7(){
    try{int[] ids={R.raw.hero_a,R.raw.hero_b,R.raw.hero_c,R.raw.hero_d,R.raw.hero_e,R.raw.hero_f};StringBuilder b=new StringBuilder(60000);for(int id:ids){BufferedReader br=new BufferedReader(new InputStreamReader(getResources().openRawResource(id)));String line;while((line=br.readLine())!=null)b.append(line.trim());br.close();}byte[] raw=Base64.decode(b.toString(),Base64.DEFAULT);return BitmapFactory.decodeByteArray(raw,0,raw.length);}catch(Exception e){return null;}
  }

  // ---------- Navigation ----------
  @Override void nav(){
    nav.removeAllViews();
    navItem("⌂",i18n("Hoje"),"home");
    navItem("＋",i18n("Pratos"),"meals");
    navItem("≡",i18n("Diário"),"diary");
    navItem("✦","Balyvo","daily");
    navItem("↗",i18n("Evolução"),"progress");
  }

  @Override void show(String k){
    tab=k;nav();body.removeAllViews();View v;
    if("daily".equals(k))v=daily();
    else if("home".equals(k))v=home();
    else if("meals".equals(k))v=mealScreen();
    else if("diary".equals(k))v=diary();
    else v=progress();
    body.addView(v);
  }

  // ---------- Home / existing screens ----------
  @Override View home(){
    ScrollView s=(ScrollView)super.home();LinearLayout q=(LinearLayout)s.getChildAt(0);
    LinearLayout daily=card();LinearLayout.LayoutParams lp=match();lp.topMargin=dp(12);lp.bottomMargin=dp(4);
    int score=balyvoScore();
    LinearLayout h=row();h.setGravity(Gravity.CENTER_VERTICAL);LinearLayout left=col();h.addView(left,new LinearLayout.LayoutParams(0,-2,1));left.addView(txt("BALYVO DAILY",9,NEON,true),match());left.addView(txt(english()?"Your next best move":"Seu próximo melhor passo",18,TEXT,true),match());TextView badge=chip("✦ "+score+"/100");h.addView(badge,wrap());daily.addView(h,match());TextView insight=txt(smartAnalysis(),11,SOFT,false);LinearLayout.LayoutParams ip=match();ip.topMargin=dp(8);daily.addView(insight,ip);TextView open=button(english()?"Open Balyvo Daily":"Abrir Balyvo Daily");open.setOnClickListener(v->show("daily"));LinearLayout.LayoutParams op=match();op.topMargin=dp(12);daily.addView(open,op);q.addView(daily,Math.min(2,q.getChildCount()),lp);
    translateTree(s);rebindShareActions(s);return s;
  }

  @Override View diary(){View v=super.diary();translateTree(v);return v;}

  @Override View progress(){
    ScrollView s=(ScrollView)super.progress();translateTree(s);rebindShareActions(s);
    LinearLayout q=(LinearLayout)s.getChildAt(0);TextView lang=button(english()?"Language & units":"Idioma e unidades");lang.setOnClickListener(v->languageDialog());LinearLayout.LayoutParams lp=match();lp.topMargin=dp(8);lp.bottomMargin=dp(14);q.addView(lang,lp);return s;
  }

  private void rebindShareActions(View root){
    if(root instanceof TextView){TextView t=(TextView)root;String z=t.getText().toString();
      if(z.contains("Compartilhar Balyvo")||z.contains("Share Balyvo"))t.setOnClickListener(v->shareBalyvoV7());
      else if(z.contains("Meu progresso")||z.contains("My progress")||z.contains("Compartilhar meu progresso")||z.contains("Share my progress"))t.setOnClickListener(v->{if(requirePro())shareProgressDialogV7(false);});
      else if(z.contains("Compartilhar conquista")||z.contains("Share achievement"))t.setOnClickListener(v->{if(requirePro())shareProgressDialogV7(true);});
    }
    if(root instanceof ViewGroup){ViewGroup g=(ViewGroup)root;for(int i=0;i<g.getChildCount();i++)rebindShareActions(g.getChildAt(i));}
  }

  // ---------- Meal library, safe category keys in both languages ----------
  @Override View mealScreen(){
    LinearLayout root=col();root.setBackgroundColor(NIGHT);LinearLayout top=page();top.setPadding(dp(20),dp(16),dp(20),dp(4));TextView k=txt("BIBLIOTECA BRASILEIRA",9,NEON,true);k.setLetterSpacing(.16f);top.addView(k,match());TextView t=txt("O que entrou no prato?",29,TEXT,true);LinearLayout.LayoutParams tp=match();tp.topMargin=dp(4);top.addView(t,tp);top.addView(txt("Busque, favorite ou registre manualmente em segundos.",11,SOFT,false),match());EditText search=new EditText(this);search.setHint(i18n("Buscar arroz, frango, macarrão..."));search.setSingleLine();search.setTextColor(TEXT);search.setHintTextColor(SOFT);search.setTextSize(13);search.setPadding(dp(15),dp(11),dp(15),dp(11));search.setBackground(bg(SURFACE2,18,LINE,1));LinearLayout.LayoutParams sep=match();sep.topMargin=dp(14);top.addView(search,sep);TextView manual=txt("✎  Registrar alimento/calorias manualmente",11,NEON,true);manual.setGravity(Gravity.CENTER);manual.setPadding(dp(12),dp(11),dp(12),dp(11));manual.setBackground(bg(SURFACE,16,LINE,1));manual.setOnClickListener(v->manualEntryV7());LinearLayout.LayoutParams mp=match();mp.topMargin=dp(9);top.addView(manual,mp);root.addView(top,match());
    String[] keys={"Todos","Favoritos","Brasileiro","Massas","Ovos","Carnes","Frango","Peixes","Frutos do mar","Churrasco"};HorizontalScrollView hs=new HorizontalScrollView(this);hs.setHorizontalScrollBarEnabled(false);LinearLayout ch=row();ch.setPadding(dp(20),dp(7),dp(20),dp(7));hs.addView(ch,wrap());for(String key:keys){boolean on=key.equals(cat);TextView z=txt(key,10,on?NIGHT:SOFT,true);z.setGravity(Gravity.CENTER);z.setPadding(dp(14),dp(9),dp(14),dp(9));z.setBackground(bg(on?NEON:SURFACE,99,on?NEON:LINE,1));LinearLayout.LayoutParams zp=wrap();zp.rightMargin=dp(8);ch.addView(z,zp);z.setOnClickListener(v->{cat=key;show("meals");});}root.addView(hs,new LinearLayout.LayoutParams(-1,dp(56)));
    ScrollView sc=scroll();LinearLayout list=col();list.setPadding(dp(20),dp(3),dp(20),dp(25));sc.addView(list);root.addView(sc,new LinearLayout.LayoutParams(-1,0,1));Runnable r=()->renderMeals(list,search.getText().toString());search.addTextChangedListener(new android.text.TextWatcher(){public void beforeTextChanged(CharSequence s,int a,int b,int c){}public void onTextChanged(CharSequence s,int a,int b,int c){r.run();}public void afterTextChanged(android.text.Editable e){}});renderMeals(list,"");return root;
  }

  private Set<String> favoriteNames(){return new HashSet<>(p.getStringSet("favorites",Collections.emptySet()));}
  private void toggleFavoriteV7(Meal m){Set<String> s=favoriteNames();if(s.contains(m.n))s.remove(m.n);else s.add(m.n);p.edit().putStringSet("favorites",s).apply();}

  @Override void renderMeals(LinearLayout list,String query){
    list.removeAllViews();String x=query.toLowerCase(Locale.ROOT).trim();Set<String> favs=favoriteNames();int n=0;
    for(Meal m:meals){if("Favoritos".equals(cat)&&!favs.contains(m.n))continue;if(!"Todos".equals(cat)&&!"Favoritos".equals(cat)&&!cat.equals(m.c))continue;String searchable=(m.n+" "+i18n(m.n)+" "+m.d+" "+i18n(m.d)).toLowerCase(Locale.ROOT);if(!x.isEmpty()&&!searchable.contains(x))continue;n++;LinearLayout v=row();v.setGravity(Gravity.CENTER_VERTICAL);v.setPadding(dp(13),dp(13),dp(13),dp(13));v.setBackground(bg(SURFACE,20,LINE,1));TextView em=txt(m.e,26,TEXT,false);em.setGravity(Gravity.CENTER);em.setBackground(bg(SURFACE2,15,LINE,1));v.addView(em,new LinearLayout.LayoutParams(dp(54),dp(54)));LinearLayout inf=col();LinearLayout.LayoutParams ip=new LinearLayout.LayoutParams(0,-2,1);ip.leftMargin=dp(12);v.addView(inf,ip);inf.addView(txt(m.n,13,TEXT,true),match());inf.addView(txt(m.c+" · "+m.d,9,SOFT,false),match());LinearLayout side=col();side.setGravity(Gravity.CENTER_HORIZONTAL);boolean fav=favs.contains(m.n);TextView star=txt(fav?"★":"☆",22,fav?NEON:SOFT,true);star.setGravity(Gravity.CENTER);star.setPadding(dp(8),dp(2),dp(8),dp(2));star.setOnClickListener(a->{toggleFavoriteV7(m);renderMeals(list,query);});side.addView(star,wrap());side.addView(txt(m.k+" kcal",10,NEON,true),wrap());v.addView(side,wrap());v.setOnClickListener(a->portion(m));LinearLayout.LayoutParams vp=match();vp.bottomMargin=dp(9);list.addView(v,vp);}
    if(n==0){TextView e=txt("Favoritos".equals(cat)?"Nenhum favorito ainda. Toque na estrela de um prato para salvar.":"Nenhum prato encontrado.",12,SOFT,true);e.setGravity(Gravity.CENTER);e.setPadding(dp(18),dp(35),dp(18),0);list.addView(e,match());}
  }

  @Override void portion(Meal m){
    String[] sizes={i18n("Pequeno")+" · "+m.small()+" kcal",i18n("Normal")+" · "+m.k+" kcal",i18n("Grande")+" · "+m.large()+" kcal"};final int[] c={1};AlertDialog d=new AlertDialog.Builder(this).setTitle(m.e+"  "+i18n(m.n)).setSingleChoiceItems(sizes,1,(x,w)->c[0]=w).setNegativeButton(i18n("Cancelar"),null).setPositiveButton(i18n("Continuar"),null).create();d.setOnShowListener(x->d.getButton(-1).setOnClickListener(v->{d.dismiss();int kcal=c[0]==0?m.small():c[0]==2?m.large():m.k;String size=c[0]==0?"Pequeno":c[0]==2?"Grande":"Normal";slot(m,kcal,size);}));d.show();
  }

  @Override void slot(Meal m,int kcal,String size){
    String[] keys={"Café da manhã","Almoço","Lanche","Jantar","Ceia"};String[] labels=new String[keys.length];for(int i=0;i<keys.length;i++)labels[i]=i18n(keys[i]);new AlertDialog.Builder(this).setTitle(english()?"Add to which meal?":"Adicionar em qual refeição?").setItems(labels,(d,i)->{saveMeal(m,keys[i],kcal,size);Toast.makeText(this,(english()?"Added: ":"Adicionado: ")+i18n(m.n),Toast.LENGTH_SHORT).show();show("home");}).setNegativeButton(i18n("Cancelar"),null).show();
  }

  private void manualEntryV7(){
    LinearLayout box=col();box.setPadding(dp(20),dp(4),dp(20),0);EditText name=new EditText(this);name.setHint(english()?"e.g. Yogurt with banana":"Ex.: Iogurte com banana");name.setSingleLine();box.addView(name,match());EditText kcal=num("");kcal.setHint(english()?"Calories in this serving":"Calorias da porção");LinearLayout.LayoutParams kp=match();kp.topMargin=dp(8);box.addView(kcal,kp);AlertDialog d=new AlertDialog.Builder(this).setTitle(english()?"Manual entry":"Registro manual").setMessage(english()?"Use this when a food is not in the library.":"Use quando o alimento não estiver na biblioteca.").setView(box).setNegativeButton(i18n("Cancelar"),null).setPositiveButton(i18n("Continuar"),null).create();d.setOnShowListener(x->d.getButton(-1).setOnClickListener(v->{String n=name.getText().toString().trim(),ks=kcal.getText().toString().trim();if(n.isEmpty()||ks.isEmpty()){Toast.makeText(this,english()?"Enter a name and calories.":"Preencha nome e calorias.",Toast.LENGTH_SHORT).show();return;}try{int value=Integer.parseInt(ks);if(value<1||value>5000)throw new NumberFormatException();Meal m=new Meal(n,"✎","Personalizado","Registro manual",value);d.dismiss();slot(m,value,"Manual");}catch(Exception ex){Toast.makeText(this,english()?"Enter valid calories.":"Informe calorias válidas.",Toast.LENGTH_SHORT).show();}}));d.show();
  }

  // ---------- Balyvo Daily / Score ----------
  View daily(){
    ScrollView s=scroll();LinearLayout q=page();s.addView(q);TextView eye=txt("BALYVO DAILY",9,NEON,true);eye.setLetterSpacing(.16f);LinearLayout.LayoutParams ep=match();ep.topMargin=dp(12);q.addView(eye,ep);q.addView(txt(english()?"One screen. Your next move.":"Uma tela. Seu próximo passo.",29,TEXT,true),match());q.addView(txt(english()?"Guidance based on what you logged today — without perfectionism.":"Orientação baseada no que você registrou hoje — sem perfeccionismo.",11,SOFT,false),match());
    int score=balyvoScore();LinearLayout scoreCard=card();LinearLayout.LayoutParams scp=match();scp.topMargin=dp(18);q.addView(scoreCard,scp);LinearLayout sh=row();sh.setGravity(Gravity.CENTER_VERTICAL);LinearLayout sl=col();sh.addView(sl,new LinearLayout.LayoutParams(0,-2,1));sl.addView(txt("BALYVO SCORE",9,NEON,true),match());sl.addView(txt(score+" / 100",34,TEXT,true),match());TextView status=chip(score>=85?(english()?"Excellent":"Excelente"):score>=70?(english()?"Strong day":"Bom dia"):score>=50?(english()?"Building":"Construindo"):(english()?"Start now":"Comece agora"));sh.addView(status,wrap());scoreCard.addView(sh,match());TextView analysis=txt(smartAnalysis(),12,SOFT,false);LinearLayout.LayoutParams anp=match();anp.topMargin=dp(8);scoreCard.addView(analysis,anp);scoreCard.addView(scoreBreakdown(),withTop(match(),12));
    boolean access=v7HasProAccess();
    TextView wt=txt(english()?"What can I eat now?":"O que posso comer agora?",18,TEXT,true);LinearLayout.LayoutParams wtp=match();wtp.topMargin=dp(24);q.addView(wt,wtp);q.addView(txt(english()?"Balyvo uses your remaining calories and today's macros to suggest real meals.":"O Balyvo usa suas calorias restantes e os macros do dia para sugerir comida de verdade.",10,SOFT,false),match());ArrayList<Meal> picks=smartMeals();for(int i=0;i<Math.min(3,picks.size());i++)q.addView(mealSuggestionCard(picks.get(i),access),withTop(match(),9));
    LinearLayout features=row();LinearLayout.LayoutParams fp=match();fp.topMargin=dp(18);q.addView(features,fp);TextView camera=actionCard("📷",english()?"Scan my plate":"Analisar meu prato",english()?"On-device photo analysis":"Análise por foto no aparelho");camera.setOnClickListener(v->{if(requirePro())openPlateCamera();});features.addView(camera,new LinearLayout.LayoutParams(0,dp(98),1));spacer(features,10);TextView plan=actionCard("▦",english()?"Weekly plan":"Plano semanal",english()?"7 days built for your goal":"7 dias para sua meta");plan.setOnClickListener(v->{if(requirePro())weeklyPlanDialog();});features.addView(plan,new LinearLayout.LayoutParams(0,dp(98),1));
    LinearLayout social=row();LinearLayout.LayoutParams sp=match();sp.topMargin=dp(10);q.addView(social,sp);TextView story=actionCard("▣",english()?"Weekly Story":"Story semanal",english()?"Share your consistency":"Compartilhe consistência");story.setOnClickListener(v->{if(requirePro())shareWeeklyStory();});social.addView(story,new LinearLayout.LayoutParams(0,dp(98),1));spacer(social,10);TextView challenge=actionCard("🏆",english()?"Challenges":"Desafios",english()?"Invite friends & rank":"Convide e compare");challenge.setOnClickListener(v->{if(requirePro())challengeHub();});social.addView(challenge,new LinearLayout.LayoutParams(0,dp(98),1));
    LinearLayout live=card();LinearLayout.LayoutParams lp=match();lp.topMargin=dp(16);q.addView(live,lp);live.addView(txt(english()?"TODAY'S INTELLIGENCE":"INTELIGÊNCIA DO DIA",9,NEON,true),match());live.addView(txt(dailyCoachText(),16,TEXT,true),withTop(match(),6));TextView ask=button(english()?"Show more options":"Ver mais opções");ask.setOnClickListener(v->{if(requirePro())whatCanIEatDialog();});live.addView(ask,withTop(match(),12));
    LinearLayout prefs=card();LinearLayout.LayoutParams pp=match();pp.topMargin=dp(16);pp.bottomMargin=dp(22);q.addView(prefs,pp);prefs.addView(txt(english()?"LANGUAGE & UNITS":"IDIOMA E UNIDADES",9,SOFT,true),match());prefs.addView(txt(english()?"English · "+(imperial()?"lb / US":"kg / metric"):"Português · kg / métrico",13,TEXT,true),withTop(match(),5));TextView settings=button(english()?"Change preferences":"Alterar preferências");settings.setOnClickListener(v->languageDialog());prefs.addView(settings,withTop(match(),10));
    if(!access){View lock=paywallPreview();q.addView(lock,withTop(match(),8));}
    return s;
  }

  private LinearLayout.LayoutParams withTop(LinearLayout.LayoutParams p1,int top){p1.topMargin=dp(top);return p1;}

  private View scoreBreakdown(){
    int kcal=todayCalories(),g=Math.max(1,goal()),water=waterMl(),protein=macroEstimate()[0],target=proteinTarget(),logged=today().length();LinearLayout row=row();String[] a={english()?"Calories":"Calorias",english()?"Water":"Água",english()?"Protein":"Proteína",english()?"Logs":"Registros"};String[] b={Math.round(100f*kcal/g)+"%",Math.min(100,Math.round(100f*water/3000))+"%",Math.min(100,Math.round(100f*protein/Math.max(1,target)))+"%",logged+""};for(int i=0;i<4;i++){LinearLayout x=col();x.setGravity(Gravity.CENTER);x.addView(txt(b[i],15,TEXT,true),wrap());x.addView(txt(a[i],8,SOFT,true),wrap());row.addView(x,new LinearLayout.LayoutParams(0,dp(54),1));}return row;
  }

  int balyvoScore(){return scoreForDate(key());}

  private int scoreForDate(String date){
    int kcal=calories(date),g=Math.max(1,goal()),water=p.getInt("water_"+date,0),count=entries(date).length();int[] mac=macroFor(entries(date));int target=proteinTarget();double ratio=kcal/(double)g;int caloriesScore=kcal==0?0:(ratio>=.78&&ratio<=1.08?30:ratio>=.62&&ratio<=1.20?24:ratio<=1.35?17:10);int waterScore=Math.min(20,(int)Math.round(20*Math.min(1,water/3000.0)));int proteinScore=Math.min(20,(int)Math.round(20*Math.min(1,mac[0]/(double)Math.max(1,target))));int logsScore=Math.min(15,count*4);int consistency=count>0?15:0;return Math.max(0,Math.min(100,caloriesScore+waterScore+proteinScore+logsScore+consistency));
  }

  private int proteinTarget(){return Math.max(65,Math.min(170,(int)Math.round(goal()*.25/4.0)));}
  private int[] macroFor(JSONArray a){int protein=0,carbs=0,fat=0;for(int i=0;i<a.length();i++){JSONObject o=a.optJSONObject(i);if(o==null)continue;int kcal=o.optInt("kcal");String n=o.optString("meal").toLowerCase(Locale.ROOT);double pp=.25,cp=.45,fp=.30;if(n.contains("frango")||n.contains("peixe")||n.contains("tilápia")||n.contains("atum")||n.contains("carne")||n.contains("bife")||n.contains("ovo")||n.contains("chicken")||n.contains("fish")){pp=.32;cp=.38;fp=.30;}if(n.contains("macarr")||n.contains("lasanha")||n.contains("arroz")||n.contains("cuscuz")||n.contains("tapioca")||n.contains("pasta")||n.contains("rice")){cp=.48;pp=.24;fp=.28;}protein+=(int)Math.round((kcal*pp)/4.0);carbs+=(int)Math.round((kcal*cp)/4.0);fat+=(int)Math.round((kcal*fp)/9.0);}return new int[]{protein,carbs,fat};}

  private String smartAnalysis(){
    int used=todayCalories(),g=goal(),water=waterMl(),protein=macroEstimate()[0],target=proteinTarget();if(used==0)return english()?"Log your first meal and Balyvo will adapt the rest of your day.":"Registre sua primeira refeição e o Balyvo adapta o restante do seu dia.";if(used>g*1.12)return english()?"You're above today's target. No punishment: focus on your weekly average and hunger cues.":"Você passou da meta de hoje. Sem punição: foque na média semanal e nos sinais de fome.";if(water<1500)return english()?"Hydration is the clearest gap right now. Add water while keeping your normal meals.":"A hidratação é o ponto mais baixo agora. Acrescente água sem mexer de forma radical nas refeições.";if(protein<target*.60)return english()?"Protein is behind your daily reference. Your next meal can prioritize chicken, eggs, fish or lean meat.":"A proteína está abaixo da referência do dia. A próxima refeição pode priorizar frango, ovos, peixe ou carne.";int rem=Math.max(0,g-used);return english()?"You're on track. You still have about "+rem+" kcal to distribute with flexibility.":"Você está no caminho. Ainda há cerca de "+rem+" kcal para distribuir com flexibilidade.";
  }

  private String dailyCoachText(){
    int rem=Math.max(0,goal()-todayCalories()),protein=macroEstimate()[0],target=proteinTarget();if(todayCalories()==0)return english()?"Start with a meal you can actually repeat tomorrow.":"Comece com uma refeição que você conseguiria repetir amanhã.";if(rem<200)return english()?"Your calorie target is nearly filled. If you're hungry, choose a lighter option — no need to compensate tomorrow.":"Sua meta está quase preenchida. Se estiver com fome, escolha algo mais leve — sem compensar amanhã.";if(protein<target*.7)return english()?"Your next meal should lean protein-first. I found options that fit your remaining calories.":"Sua próxima refeição pode priorizar proteína. Encontrei opções que cabem nas calorias restantes.";return english()?"You have room for a normal meal. Balyvo is prioritizing options that keep the day balanced.":"Há espaço para uma refeição normal. O Balyvo está priorizando opções que mantêm o dia equilibrado.";
  }

  private ArrayList<Meal> smartMeals(){
    int remaining=Math.max(0,goal()-todayCalories());int cap=remaining>=220?Math.min(remaining,850):380;ArrayList<Meal> all=new ArrayList<>();for(Meal m:meals)if(m.k<=cap&&m.k>=120)all.add(m);final boolean needProtein=macroEstimate()[0]<proteinTarget()*.7;Collections.sort(all,(a,b)->Integer.compare(mealFitScore(b,cap,needProtein),mealFitScore(a,cap,needProtein)));return all;
  }

  private int mealFitScore(Meal m,int cap,boolean protein){String n=m.n.toLowerCase(Locale.ROOT),c=m.c.toLowerCase(Locale.ROOT);int score=100-Math.abs(cap-m.k)/8;if(protein&&(c.contains("frango")||c.contains("carn")||c.contains("peix")||c.contains("ovo")||c.contains("fruto")))score+=30;if(n.contains("salada"))score+=12;if(n.contains("feijão"))score+=6;if(n.contains("frit")||n.contains("linguiça"))score-=8;return score;}

  private View mealSuggestionCard(Meal m,boolean access){LinearLayout v=row();v.setGravity(Gravity.CENTER_VERTICAL);v.setPadding(dp(14),dp(13),dp(14),dp(13));v.setBackground(bg(SURFACE,19,LINE,1));TextView em=txt(m.e,27,TEXT,false);v.addView(em,wrap());LinearLayout t=col();LinearLayout.LayoutParams tp=new LinearLayout.LayoutParams(0,-2,1);tp.leftMargin=dp(12);v.addView(t,tp);t.addView(txt(m.n,13,TEXT,true),match());t.addView(txt((english()?"Fits today · ":"Cabe hoje · ")+m.k+" kcal",9,NEON,true),match());v.addView(txt("›",25,NEON,true),wrap());v.setAlpha(access?1f:.65f);v.setOnClickListener(x->{if(requirePro())portion(m);});return v;}

  private void whatCanIEatDialog(){ArrayList<Meal> picks=smartMeals();LinearLayout box=col();box.setPadding(dp(20),dp(4),dp(20),dp(4));int rem=Math.max(0,goal()-todayCalories());box.addView(txt((english()?"Remaining today: ":"Restante hoje: ")+rem+" kcal",12,NEON,true),match());box.addView(txt(dailyCoachText(),12,SOFT,false),withTop(match(),7));for(int i=0;i<Math.min(6,picks.size());i++){Meal m=picks.get(i);TextView item=txt(m.e+"  "+m.n+" · "+m.k+" kcal",12,TEXT,true);item.setPadding(dp(10),dp(13),dp(10),dp(13));item.setBackground(bg(SURFACE2,14,LINE,1));item.setOnClickListener(v->{portion(m);});box.addView(item,withTop(match(),7));}new AlertDialog.Builder(this).setTitle(english()?"What can I eat now?":"O que posso comer agora?").setView(box).setNegativeButton(english()?"Close":"Fechar",null).show();}

  // ---------- Weekly planning ----------
  private void weeklyPlanDialog(){
    JSONObject plan=getOrCreatePlan();LinearLayout box=col();box.setPadding(dp(18),dp(2),dp(18),dp(2));JSONArray days=plan.optJSONArray("days");if(days!=null)for(int i=0;i<days.length();i++){JSONObject d=days.optJSONObject(i);if(d==null)continue;box.addView(txt(d.optString("label"),12,NEON,true),withTop(match(),i==0?2:13));box.addView(txt(d.optString("summary"),11,TEXT,false),withTop(match(),4));}ScrollView sv=new ScrollView(this);sv.addView(box);AlertDialog dlg=new AlertDialog.Builder(this).setTitle(english()?"Your 7-day Balyvo plan":"Seu plano Balyvo de 7 dias").setMessage(english()?"A practical plan built from the meal library. Portions and calories are estimates.":"Um plano prático montado com a biblioteca do app. Porções e calorias são estimativas.").setView(sv).setNegativeButton(english()?"Close":"Fechar",null).setNeutralButton(english()?"Regenerate":"Gerar novamente",null).setPositiveButton(english()?"Share":"Compartilhar",null).create();dlg.setOnShowListener(v->{dlg.getButton(AlertDialog.BUTTON_NEUTRAL).setOnClickListener(x->{p.edit().remove(KEY_PLAN).apply();dlg.dismiss();weeklyPlanDialog();});dlg.getButton(AlertDialog.BUTTON_POSITIVE).setOnClickListener(x->sharePlan(plan));});dlg.show();
  }

  private JSONObject getOrCreatePlan(){try{String saved=p.getString(KEY_PLAN,"");if(!saved.isEmpty())return new JSONObject(saved);}catch(Exception ignored){}JSONObject plan=generateWeeklyPlan();p.edit().putString(KEY_PLAN,plan.toString()).apply();return plan;}

  private JSONObject generateWeeklyPlan(){JSONObject root=new JSONObject();JSONArray days=new JSONArray();try{root.put("goal",goal());root.put("created",System.currentTimeMillis());Calendar c=Calendar.getInstance();Random r=new Random(key().hashCode());ArrayList<Meal> breakfast=filterMeals(180,500,"ovo","tapioca","cuscuz","pão","iogurte","banana","açaí");ArrayList<Meal> main=filterMeals(320,800,"frango","carne","peixe","tilápia","salmão","arroz","feijão");ArrayList<Meal> snack=filterMeals(100,380,"lanche","fruta","iogurte","ovo","tapioca","pão","açaí");if(breakfast.isEmpty())breakfast=new ArrayList<>(meals);if(main.isEmpty())main=new ArrayList<>(meals);if(snack.isEmpty())snack=new ArrayList<>(meals);for(int i=0;i<7;i++){Meal b=breakfast.get(Math.abs(r.nextInt())%breakfast.size()),l=main.get(Math.abs(r.nextInt())%main.size()),sn=snack.get(Math.abs(r.nextInt())%snack.size()),di=main.get(Math.abs(r.nextInt())%main.size());int total=b.k+l.k+sn.k+di.k;JSONObject d=new JSONObject();String label=new SimpleDateFormat("EEEE",english()?Locale.US:new Locale("pt","BR")).format(c.getTime());d.put("label",label.substring(0,1).toUpperCase()+label.substring(1));String sum=(english()?"Breakfast: ":"Café: ")+i18n(b.n)+" · "+(english()?"Lunch: ":"Almoço: ")+i18n(l.n)+"\n"+(english()?"Snack: ":"Lanche: ")+i18n(sn.n)+" · "+(english()?"Dinner: ":"Jantar: ")+i18n(di.n)+"\n≈ "+total+" kcal";d.put("summary",sum);days.put(d);c.add(Calendar.DAY_OF_YEAR,1);}root.put("days",days);}catch(Exception ignored){}return root;}

  private ArrayList<Meal> filterMeals(int min,int max,String... keys){ArrayList<Meal> a=new ArrayList<>();for(Meal m:meals){if(m.k<min||m.k>max)continue;String n=(m.n+" "+m.c).toLowerCase(Locale.ROOT);for(String k:keys)if(n.contains(k)){a.add(m);break;}}return a;}
  private void sharePlan(JSONObject plan){JSONArray a=plan.optJSONArray("days");StringBuilder b=new StringBuilder(english()?"My 7-day Balyvo plan\n\n":"Meu plano de 7 dias no Balyvo\n\n");if(a!=null)for(int i=0;i<a.length();i++){JSONObject d=a.optJSONObject(i);if(d!=null)b.append(d.optString("label")).append(": ").append(d.optString("summary").replace("\n"," | ")).append("\n");}b.append(english()?"\nBalyvo — Nutrition for real life":"\nBalyvo — Nutrição para a vida real");shareTextIntent(b.toString(),english()?"Share plan":"Compartilhar plano");}

  // ---------- Plate photo / ML Kit ----------
  private void openPlateCamera(){Intent i=new Intent(MediaStore.ACTION_IMAGE_CAPTURE);if(i.resolveActivity(getPackageManager())!=null)startActivityForResult(i,REQ_PLATE_CAMERA);else Toast.makeText(this,english()?"No camera app was found.":"Nenhum app de câmera foi encontrado.",Toast.LENGTH_SHORT).show();}

  @Override protected void onActivityResult(int requestCode,int resultCode,Intent data){super.onActivityResult(requestCode,resultCode,data);if(requestCode==REQ_PLATE_CAMERA&&resultCode==RESULT_OK){try{Bitmap bm=data!=null&&data.getExtras()!=null?(Bitmap)data.getExtras().get("data"):null;if(bm==null)throw new Exception();lastPlateBitmap=bm;analyzePlateBitmap(bm);}catch(Exception e){Toast.makeText(this,english()?"The photo could not be read.":"Não foi possível ler a foto.",Toast.LENGTH_SHORT).show();}}}

  private void analyzePlateBitmap(Bitmap bm){Toast.makeText(this,english()?"Analyzing the plate on your device…":"Analisando o prato no aparelho…",Toast.LENGTH_SHORT).show();InputImage image=InputImage.fromBitmap(bm,0);ImageLabeler labeler=ImageLabeling.getClient(new ImageLabelerOptions.Builder().setConfidenceThreshold(.55f).build());labeler.process(image).addOnSuccessListener(labels->{showPlateResult(labels);labeler.close();}).addOnFailureListener(e->{labeler.close();Toast.makeText(this,english()?"I couldn't recognize enough detail. You can still choose the meal manually.":"Não consegui reconhecer detalhes suficientes. Você ainda pode escolher o prato manualmente.",Toast.LENGTH_LONG).show();show("meals");});}

  private void showPlateResult(List<ImageLabel> labels){ArrayList<Meal> picks=plateCandidates(labels);LinearLayout box=col();box.setPadding(dp(18),dp(4),dp(18),0);if(lastPlateBitmap!=null){ImageView iv=new ImageView(this);iv.setImageBitmap(lastPlateBitmap);iv.setScaleType(ImageView.ScaleType.CENTER_CROP);box.addView(iv,new LinearLayout.LayoutParams(-1,dp(180)));}StringBuilder seen=new StringBuilder();for(int i=0;i<Math.min(5,labels.size());i++){if(i>0)seen.append(" · ");seen.append(labelName(labels.get(i).getText())).append(" ").append(Math.round(labels.get(i).getConfidence()*100)).append("%");}box.addView(txt((english()?"Detected: ":"Detectado: ")+(seen.length()==0?(english()?"food":"comida"):seen.toString()),10,SOFT,false),withTop(match(),10));if(!picks.isEmpty()){Meal best=picks.get(0);int ps=plateScore(best);box.addView(txt("PRATO BALYVO · "+ps+"/100",10,NEON,true),withTop(match(),12));box.addView(txt(i18n(best.n)+" · ≈ "+best.k+" kcal",19,TEXT,true),withTop(match(),5));box.addView(txt(plateComment(best,ps),11,SOFT,false),withTop(match(),7));for(int i=0;i<Math.min(3,picks.size());i++){Meal m=picks.get(i);TextView opt=txt((i==0?"✓ ":"○ ")+m.e+" "+m.n+" · "+m.k+" kcal",11,TEXT,true);opt.setPadding(dp(10),dp(12),dp(10),dp(12));opt.setBackground(bg(SURFACE2,14,LINE,1));opt.setOnClickListener(v->portion(m));box.addView(opt,withTop(match(),7));}}else box.addView(txt(english()?"The image was recognized as food, but no specific meal match was reliable. Confirm it in the library.":"A imagem foi reconhecida como comida, mas não houve correspondência confiável com um prato. Confirme na biblioteca.",11,SOFT,false),withTop(match(),12));new AlertDialog.Builder(this).setTitle(english()?"Balyvo Plate":"Prato Balyvo").setMessage(english()?"Photo recognition is an estimate. Always confirm the food and serving before logging.":"O reconhecimento por foto é uma estimativa. Confirme sempre o alimento e a porção antes de registrar.").setView(box).setNegativeButton(english()?"Close":"Fechar",null).setPositiveButton(english()?"Open meal library":"Abrir biblioteca",(d,w)->show("meals")).show();}

  private ArrayList<Meal> plateCandidates(List<ImageLabel> labels){ArrayList<Meal> a=new ArrayList<>(meals);Collections.sort(a,(x,y)->Integer.compare(plateMatchScore(y,labels),plateMatchScore(x,labels)));ArrayList<Meal> out=new ArrayList<>();for(Meal m:a){if(plateMatchScore(m,labels)>0)out.add(m);if(out.size()>=5)break;}return out;}
  private int plateMatchScore(Meal m,List<ImageLabel> labels){String n=(m.n+" "+m.c).toLowerCase(Locale.ROOT);int s=0;for(ImageLabel l:labels){String x=l.getText().toLowerCase(Locale.ROOT);int w=Math.round(l.getConfidence()*10);if(x.contains("chicken")&&n.contains("frango"))s+=4*w;else if((x.contains("meat")||x.contains("beef")||x.contains("steak"))&&(n.contains("carne")||n.contains("bife")||n.contains("churrasco")))s+=4*w;else if((x.contains("fish")||x.contains("seafood"))&&(n.contains("peixe")||n.contains("tilápia")||n.contains("salmão")||n.contains("camarão")||n.contains("lula")))s+=4*w;else if((x.contains("pasta")||x.contains("noodle"))&&(n.contains("macarr")||n.contains("lasanha")))s+=4*w;else if(x.contains("rice")&&n.contains("arroz"))s+=3*w;else if(x.contains("egg")&&(n.contains("ovo")||n.contains("omelete")))s+=4*w;else if((x.contains("salad")||x.contains("vegetable"))&&n.contains("salada"))s+=2*w;else if(x.contains("bread")&&n.contains("pão"))s+=3*w;else if(x.contains("food")||x.contains("dish")||x.contains("cuisine"))s+=1;}return s;}
  private String labelName(String s){if(!english()){String x=s.toLowerCase(Locale.ROOT);if(x.contains("chicken"))return "frango";if(x.contains("meat")||x.contains("beef"))return "carne";if(x.contains("fish"))return "peixe";if(x.contains("seafood"))return "frutos do mar";if(x.contains("rice"))return "arroz";if(x.contains("egg"))return "ovos";if(x.contains("pasta")||x.contains("noodle"))return "massa";if(x.contains("salad"))return "salada";if(x.contains("bread"))return "pão";if(x.contains("food")||x.contains("dish"))return "comida";}return s;}
  private int plateScore(Meal m){String n=m.n.toLowerCase(Locale.ROOT),c=m.c.toLowerCase(Locale.ROOT);int s=62;if(c.contains("frango")||c.contains("peix")||c.contains("carn")||c.contains("ovo"))s+=13;if(n.contains("salada"))s+=12;if(n.contains("feijão"))s+=7;if(n.contains("frit")||n.contains("linguiça"))s-=10;if(m.k>800)s-=8;if(m.k<650)s+=4;return Math.max(35,Math.min(96,s));}
  private String plateComment(Meal m,int score){String n=m.n.toLowerCase(Locale.ROOT);if(score>=85)return english()?"Strong balance for a real-life meal. Confirm the serving and log it.":"Bom equilíbrio para uma refeição de vida real. Confirme a porção e registre.";if(n.contains("frit")||m.k>800)return english()?"It can fit your day, but serving size matters more here. Balyvo will recalculate after you confirm it.":"Pode caber no seu dia, mas a porção pesa mais aqui. O Balyvo recalcula depois que você confirmar.";return english()?"A reasonable option. Add vegetables or a protein source when that makes sense for you.":"Uma opção razoável. Acrescente vegetais ou uma fonte de proteína quando fizer sentido para você.";}

  // ---------- Weekly Stories ----------
  private void shareWeeklyStory(){try{Bitmap bm=createWeeklyStoryCard();File dir=new File(getCacheDir(),"share");if(!dir.exists())dir.mkdirs();File out=new File(dir,"balyvo-story-semanal.png");FileOutputStream fos=new FileOutputStream(out);bm.compress(Bitmap.CompressFormat.PNG,100,fos);fos.close();Uri uri=FileProvider.getUriForFile(this,getPackageName()+".files",out);Intent send=new Intent(Intent.ACTION_SEND);send.setType("image/png");send.putExtra(Intent.EXTRA_STREAM,uri);send.putExtra(Intent.EXTRA_TEXT,weeklyStoryText());send.addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION);startActivity(Intent.createChooser(send,english()?"Share my Balyvo week":"Compartilhar minha semana Balyvo"));}catch(Exception e){Toast.makeText(this,english()?"I couldn't generate the Story.":"Não foi possível gerar o Story.",Toast.LENGTH_SHORT).show();}}
  private int[] weekStats(){Calendar c=Calendar.getInstance();c.add(Calendar.DAY_OF_YEAR,-6);int active=0,total=0,water=0,score=0;for(int i=0;i<7;i++){String d=new SimpleDateFormat("yyyy-MM-dd",Locale.US).format(c.getTime());int kcal=calories(d);if(kcal>0)active++;total+=kcal;water+=p.getInt("water_"+d,0);score+=scoreForDate(d);c.add(Calendar.DAY_OF_YEAR,1);}return new int[]{active,total/7,water,score/7};}
  private String weeklyStoryText(){int[] w=weekStats();return (english()?"My week on Balyvo\n":"Minha semana no Balyvo\n")+"🔥 "+w[0]+"/7 "+(english()?"active days":"dias ativos")+"\n✦ Score "+w[3]+"/100\n💧 "+String.format(Locale.US,"%.1f",w[2]/1000.0)+" L\n🍽 "+w[1]+" kcal/"+(english()?"day":"dia")+(english()?"\n\nBalyvo — Nutrition for real life":"\n\nBalyvo — Nutrição para a vida real");}
  private Bitmap createWeeklyStoryCard(){int[] w=weekStats();final int W=1080,H=1350;Bitmap bm=Bitmap.createBitmap(W,H,Bitmap.Config.ARGB_8888);Canvas c=new Canvas(bm);Paint p1=new Paint(Paint.ANTI_ALIAS_FLAG);LinearGradient g=new LinearGradient(0,0,W,H,0xFF050807,0xFF102318,Shader.TileMode.CLAMP);p1.setShader(g);c.drawRect(0,0,W,H,p1);p1.setShader(null);Drawable brand=getDrawable(R.drawable.ic_balyvo);if(brand!=null){brand.setBounds(70,70,190,190);brand.draw(c);}p1.setTypeface(Typeface.DEFAULT_BOLD);p1.setColor(Color.WHITE);p1.setTextSize(54);c.drawText("Balyvo",220,130,p1);p1.setTextSize(24);p1.setColor(NEON);c.drawText(english()?"MY WEEK · REAL LIFE":"MINHA SEMANA · VIDA REAL",220,172,p1);p1.setColor(Color.WHITE);p1.setTextSize(64);c.drawText(english()?"Consistency wins.":"Consistência vence.",70,330,p1);String[][] metrics={{english()?"ACTIVE DAYS":"DIAS ATIVOS",w[0]+" / 7"},{"BALYVO SCORE",w[3]+" / 100"},{english()?"WATER":"ÁGUA",String.format(Locale.US,"%.1f L",w[2]/1000.0)},{english()?"AVG CALORIES":"MÉDIA CALORIAS",w[1]+" kcal"}};float y=430,bw=444,bh=170,gap=28;for(int i=0;i<4;i++){int col=i%2,row=i/2;float x=70+col*(bw+gap),yy=y+row*(bh+gap);p1.setColor(0xFF121A17);c.drawRoundRect(x,yy,x+bw,yy+bh,28,28,p1);p1.setColor(0xFFA2ADA6);p1.setTextSize(22);c.drawText(metrics[i][0],x+26,yy+52,p1);p1.setColor(NEON);p1.setTextSize(43);c.drawText(metrics[i][1],x+26,yy+118,p1);}p1.setColor(Color.WHITE);p1.setTextSize(31);c.drawText(english()?"Real food. Real consistency.":"Comida real. Consistência real.",70,1195,p1);p1.setColor(0xFFA2ADA6);p1.setTextSize(22);c.drawText(english()?"Generated on Balyvo":"Gerado no Balyvo",70,1250,p1);return bm;}

  // ---------- Challenges / invite codes / shared ranking snapshots ----------
  private void challengeHub(){JSONObject ch=loadChallenge();if(ch==null){new AlertDialog.Builder(this).setTitle(english()?"Balyvo Challenges":"Desafios Balyvo").setMessage(english()?"Create a 7, 14 or 30-day consistency challenge, or join one using an invite code.":"Crie um desafio de consistência de 7, 14 ou 30 dias, ou entre usando um código de convite.").setNegativeButton(english()?"Close":"Fechar",null).setNeutralButton(english()?"Join":"Entrar",(d,w)->joinChallengeDialog()).setPositiveButton(english()?"Create":"Criar",(d,w)->createChallengeDialog()).show();return;}showChallenge(ch);}
  private JSONObject loadChallenge(){try{String s=p.getString(KEY_CHALLENGE,"");return s.isEmpty()?null:new JSONObject(s);}catch(Exception e){return null;}}
  private void saveChallenge(JSONObject o){p.edit().putString(KEY_CHALLENGE,o.toString()).apply();}
  private String nickname(){return p.getString(KEY_NICK,english()?"Me":"Eu");}
  private void createChallengeDialog(){LinearLayout box=col();box.setPadding(dp(20),dp(2),dp(20),0);EditText name=new EditText(this);name.setHint(english()?"Challenge name":"Nome do desafio");box.addView(name,match());EditText nick=new EditText(this);nick.setHint(english()?"Your nickname":"Seu apelido");nick.setText(nickname());box.addView(nick,match());String[] durations={"7 "+(english()?"days":"dias"),"14 "+(english()?"days":"dias"),"30 "+(english()?"days":"dias")};final int[] pick={0};new AlertDialog.Builder(this).setTitle(english()?"Create challenge":"Criar desafio").setView(box).setSingleChoiceItems(durations,0,(d,w)->pick[0]=w).setNegativeButton(i18n("Cancelar"),null).setPositiveButton(english()?"Create":"Criar",(d,w)->{try{int[] ds={7,14,30};JSONObject o=new JSONObject();o.put("id",UUID.randomUUID().toString().substring(0,8).toUpperCase(Locale.ROOT));o.put("name",name.getText().toString().trim().isEmpty()?"Balyvo "+ds[pick[0]]:name.getText().toString().trim());o.put("duration",ds[pick[0]]);o.put("start",System.currentTimeMillis());o.put("peers",new JSONArray());p.edit().putString(KEY_NICK,nick.getText().toString().trim().isEmpty()?nickname():nick.getText().toString().trim()).apply();saveChallenge(o);shareChallengeInvite(o);show("daily");}catch(Exception ignored){}}).show();}
  private void joinChallengeDialog(){EditText code=new EditText(this);code.setHint(english()?"Paste invite code":"Cole o código do convite");FrameLayout f=new FrameLayout(this);f.setPadding(dp(20),0,dp(20),0);f.addView(code,new FrameLayout.LayoutParams(-1,-2));new AlertDialog.Builder(this).setTitle(english()?"Join challenge":"Entrar no desafio").setView(f).setNegativeButton(i18n("Cancelar"),null).setPositiveButton(english()?"Join":"Entrar",(d,w)->{JSONObject o=parseInvite(code.getText().toString().trim());if(o==null){Toast.makeText(this,english()?"Invalid invite code.":"Código de convite inválido.",Toast.LENGTH_SHORT).show();return;}saveChallenge(o);showChallenge(o);}).show();}
  private String inviteCode(JSONObject o){try{return "BALYVO1:"+o.getString("id")+":"+o.getInt("duration")+":"+o.getLong("start")+":"+Base64.encodeToString(o.getString("name").getBytes("UTF-8"),Base64.URL_SAFE|Base64.NO_WRAP);}catch(Exception e){return "";}}
  private JSONObject parseInvite(String c){try{String[] p1=c.split(":");if(p1.length!=5||!"BALYVO1".equals(p1[0]))return null;JSONObject o=new JSONObject();o.put("id",p1[1]);o.put("duration",Integer.parseInt(p1[2]));o.put("start",Long.parseLong(p1[3]));o.put("name",new String(Base64.decode(p1[4],Base64.URL_SAFE),"UTF-8"));o.put("peers",new JSONArray());return o;}catch(Exception e){return null;}}
  private void shareChallengeInvite(JSONObject o){String code=inviteCode(o);String text=(english()?"Join my Balyvo consistency challenge: ":"Entre no meu desafio de consistência do Balyvo: ")+o.optString("name")+"\n\n"+(english()?"Invite code: ":"Código: ")+code+(english()?"\n\nOpen Balyvo > Daily > Challenges > Join and paste the code.":"\n\nAbra Balyvo > Daily > Desafios > Entrar e cole o código.");shareTextIntent(text,english()?"Invite to challenge":"Convidar para o desafio");}
  private void showChallenge(JSONObject o){LinearLayout box=col();box.setPadding(dp(18),dp(2),dp(18),0);long elapsed=Math.max(0,System.currentTimeMillis()-o.optLong("start"));int day=Math.min(o.optInt("duration",7),(int)(elapsed/(24L*60L*60L*1000L))+1);box.addView(txt(o.optString("name"),20,TEXT,true),match());box.addView(txt((english()?"Day ":"Dia ")+day+" / "+o.optInt("duration",7)+" · "+(english()?"consistency, not perfection":"consistência, não perfeição"),10,SOFT,false),withTop(match(),4));ArrayList<Rank> ranks=new ArrayList<>();ranks.add(new Rank(nickname(),balyvoScore(),streak()));JSONArray peers=o.optJSONArray("peers");if(peers!=null)for(int i=0;i<peers.length();i++){JSONObject x=peers.optJSONObject(i);if(x!=null)ranks.add(new Rank(x.optString("name"),x.optInt("score"),x.optInt("streak")));}Collections.sort(ranks,(a,b)->Integer.compare(b.score,a.score));for(int i=0;i<ranks.size();i++){Rank r=ranks.get(i);box.addView(txt((i+1)+". "+r.name+"   ✦ "+r.score+"   🔥 "+r.streak,12,i==0?NEON:TEXT,true),withTop(match(),9));}TextView invite=button(english()?"Invite a friend":"Convidar amigo");invite.setOnClickListener(v->shareChallengeInvite(o));box.addView(invite,withTop(match(),14));TextView update=button(english()?"Share my ranking update":"Compartilhar minha atualização");update.setOnClickListener(v->shareChallengeUpdate(o));box.addView(update,withTop(match(),8));TextView importB=button(english()?"Import a friend's update":"Importar atualização de amigo");importB.setOnClickListener(v->importChallengeUpdate(o));box.addView(importB,withTop(match(),8));new AlertDialog.Builder(this).setTitle(english()?"Balyvo Challenge":"Desafio Balyvo").setView(box).setNegativeButton(english()?"Close":"Fechar",null).setNeutralButton(english()?"Leave":"Sair",(d,w)->p.edit().remove(KEY_CHALLENGE).apply()).show();}
  static class Rank{String name;int score,streak;Rank(String n,int s,int st){name=n;score=s;streak=st;}}
  private void shareChallengeUpdate(JSONObject o){try{String n=Base64.encodeToString(nickname().getBytes("UTF-8"),Base64.URL_SAFE|Base64.NO_WRAP);String code="BALYVOSCORE:"+o.getString("id")+":"+n+":"+balyvoScore()+":"+streak()+":"+System.currentTimeMillis();shareTextIntent((english()?"My Balyvo challenge update\n":"Minha atualização do desafio Balyvo\n")+code,english()?"Share ranking update":"Compartilhar atualização");}catch(Exception ignored){}}
  private void importChallengeUpdate(JSONObject o){EditText code=new EditText(this);code.setHint(english()?"Paste BALYVOSCORE code":"Cole o código BALYVOSCORE");FrameLayout f=new FrameLayout(this);f.setPadding(dp(20),0,dp(20),0);f.addView(code,new FrameLayout.LayoutParams(-1,-2));new AlertDialog.Builder(this).setTitle(english()?"Import friend update":"Importar atualização").setView(f).setNegativeButton(i18n("Cancelar"),null).setPositiveButton(english()?"Import":"Importar",(d,w)->{try{String[] x=code.getText().toString().trim().split(":");if(x.length!=6||!"BALYVOSCORE".equals(x[0])||!o.getString("id").equals(x[1]))throw new Exception();String name=new String(Base64.decode(x[2],Base64.URL_SAFE),"UTF-8");JSONObject peer=new JSONObject();peer.put("name",name);peer.put("score",Integer.parseInt(x[3]));peer.put("streak",Integer.parseInt(x[4]));peer.put("at",Long.parseLong(x[5]));JSONArray peers=o.optJSONArray("peers");if(peers==null)peers=new JSONArray();JSONArray next=new JSONArray();boolean replaced=false;for(int i=0;i<peers.length();i++){JSONObject p0=peers.optJSONObject(i);if(p0!=null&&name.equals(p0.optString("name"))){next.put(peer);replaced=true;}else if(p0!=null)next.put(p0);}if(!replaced)next.put(peer);o.put("peers",next);saveChallenge(o);Toast.makeText(this,english()?"Ranking updated.":"Ranking atualizado.",Toast.LENGTH_SHORT).show();showChallenge(o);}catch(Exception e){Toast.makeText(this,english()?"Invalid update code.":"Código de atualização inválido.",Toast.LENGTH_SHORT).show();}}).show();}

  // ---------- Sharing V7 ----------
  private void shareBalyvoV7(){String text=english()?"Meet Balyvo.\n\nNutrition for real life: meals, calories, water, progress, Daily Score and practical guidance in one place.\n\nBalyvo — Your food. Your control. Your progress.":"Conheça o Balyvo.\n\nNutrição para a vida real: refeições, calorias, água, evolução, Score diário e orientação prática em um só lugar.\n\nBalyvo — Sua comida. Seu controle. Seu progresso.";shareTextIntent(text,english()?"Share Balyvo":"Compartilhar Balyvo");}
  private void shareTextIntent(String text,String title){Intent send=new Intent(Intent.ACTION_SEND);send.setType("text/plain");send.putExtra(Intent.EXTRA_TEXT,text);startActivity(Intent.createChooser(send,title));}
  private String achievementV7(){if(streak()>=7)return "🔥 "+streak()+" "+(english()?"day streak":"dias de consistência");if(waterMl()>=3000)return english()?"💧 Water goal reached":"💧 Meta de água atingida";if(todayCalories()>0&&todayCalories()<=goal())return english()?"🎯 Day within goal":"🎯 Dia dentro da meta";if(streak()>=3)return "🔥 "+streak()+" "+(english()?"days following your plan":"dias seguindo seu plano");return english()?"✨ Keep logging to unlock achievements":"✨ Continue registrando para liberar conquistas";}
  private void shareProgressDialogV7(boolean achievement){String[] fields=english()?new String[]{"Calories","Water","Streak","Goal","Weight","BMI"}:new String[]{"Calorias","Água","Sequência","Meta atingida","Peso","IMC"};boolean[] checked={true,true,true,true,false,false};AlertDialog d=new AlertDialog.Builder(this).setTitle(achievement?(english()?"Share achievement":"Compartilhar conquista"):(english()?"What do you want to show?":"O que deseja mostrar?")).setMessage(english()?"Weight and BMI are off by default for privacy.":"Peso e IMC ficam desmarcados por padrão para proteger sua privacidade.").setMultiChoiceItems(fields,checked,(x,w,on)->checked[w]=on).setNegativeButton(i18n("Cancelar"),null).setPositiveButton(english()?"Generate card":"Gerar card",null).create();d.setOnShowListener(x->d.getButton(-1).setOnClickListener(v->{d.dismiss();shareProgressV7(checked,achievement);}));d.show();}
  private void shareProgressV7(boolean[] show,boolean achievement){try{Bitmap bm=createProgressCardV7(show,achievement);File dir=new File(getCacheDir(),"share");if(!dir.exists())dir.mkdirs();File out=new File(dir,achievement?"balyvo-achievement-v7.png":"balyvo-progress-v7.png");FileOutputStream fos=new FileOutputStream(out);bm.compress(Bitmap.CompressFormat.PNG,100,fos);fos.close();Uri uri=FileProvider.getUriForFile(this,getPackageName()+".files",out);Intent send=new Intent(Intent.ACTION_SEND);send.setType("image/png");send.putExtra(Intent.EXTRA_STREAM,uri);send.putExtra(Intent.EXTRA_TEXT,progressTextV7(show,achievement));send.addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION);startActivity(Intent.createChooser(send,achievement?(english()?"Share achievement":"Compartilhar conquista"):(english()?"Share progress":"Compartilhar progresso")));}catch(Exception e){Toast.makeText(this,english()?"Could not generate the card.":"Não foi possível gerar o card.",Toast.LENGTH_SHORT).show();}}
  private String progressTextV7(boolean[] show,boolean achievement){StringBuilder b=new StringBuilder(achievement?(english()?"My Balyvo achievement\n":"Minha conquista no Balyvo\n"):(english()?"My day on Balyvo\n":"Meu dia no Balyvo\n"));if(achievement)b.append(achievementV7()).append("\n");if(show[0])b.append("🍽 ").append(todayCalories()).append(" kcal\n");if(show[1])b.append("💧 ").append(String.format(Locale.US,"%.1f L",waterMl()/1000.0)).append("\n");if(show[2])b.append("🔥 ").append(streak()).append(english()?" day streak\n":" dias de consistência\n");if(show[3])b.append("✦ Balyvo Score ").append(balyvoScore()).append("/100\n");if(show[4])b.append("⚖ ").append(imperial()?String.format(Locale.US,"%.1f lb",weight()*2.2046226218):f1(weight())+" kg").append("\n");if(show[5])b.append("◎ BMI ").append(f1(bmi())).append("\n");b.append(english()?"\nBalyvo — Nutrition for real life":"\nBalyvo — Nutrição para a vida real");return b.toString();}
  private Bitmap createProgressCardV7(boolean[] show,boolean achievement){final int W=1080,H=1350;Bitmap bm=Bitmap.createBitmap(W,H,Bitmap.Config.ARGB_8888);Canvas c=new Canvas(bm);Paint p1=new Paint(Paint.ANTI_ALIAS_FLAG);LinearGradient g=new LinearGradient(0,0,W,H,0xFF050807,0xFF102318,Shader.TileMode.CLAMP);p1.setShader(g);c.drawRect(0,0,W,H,p1);p1.setShader(null);Drawable brand=getDrawable(R.drawable.ic_balyvo);if(brand!=null){brand.setBounds(72,72,190,190);brand.draw(c);}p1.setColor(Color.WHITE);p1.setTextSize(54);p1.setTypeface(Typeface.DEFAULT_BOLD);c.drawText("Balyvo",220,133,p1);p1.setColor(NEON);p1.setTextSize(24);c.drawText(english()?"NUTRITION FOR REAL LIFE":"NUTRIÇÃO PARA A VIDA REAL",220,174,p1);p1.setColor(Color.WHITE);p1.setTextSize(58);String heading=achievement?(english()?"Achievement unlocked":"Conquista desbloqueada"):(english()?"My progress today":"Meu progresso de hoje");c.drawText(heading,72,330,p1);if(achievement){p1.setColor(NEON);p1.setTextSize(34);c.drawText(achievementV7(),72,395,p1);}ArrayList<String[]> metrics=new ArrayList<>();if(show[0])metrics.add(new String[]{english()?"CALORIES":"CALORIAS",todayCalories()+" kcal"});if(show[1])metrics.add(new String[]{english()?"WATER":"ÁGUA",String.format(Locale.US,"%.1f L",waterMl()/1000.0)});if(show[2])metrics.add(new String[]{english()?"STREAK":"SEQUÊNCIA",streak()+" "+(english()?"days":"dias")});if(show[3])metrics.add(new String[]{"BALYVO SCORE",balyvoScore()+" / 100"});if(show[4])metrics.add(new String[]{english()?"WEIGHT":"PESO",imperial()?String.format(Locale.US,"%.1f lb",weight()*2.2046226218):f1(weight())+" kg"});if(show[5])metrics.add(new String[]{"BMI",f1(bmi())});float y=achievement?500:420,bw=444,bh=150,gap=28;for(int i=0;i<metrics.size();i++){int col=i%2,row=i/2;float x=72+col*(bw+gap),yy=y+row*(bh+gap);p1.setColor(0xFF121A17);c.drawRoundRect(x,yy,x+bw,yy+bh,28,28,p1);p1.setColor(0xFFA2ADA6);p1.setTextSize(22);c.drawText(metrics.get(i)[0],x+28,yy+48,p1);p1.setColor(NEON);p1.setTextSize(39);c.drawText(metrics.get(i)[1],x+28,yy+108,p1);}p1.setColor(Color.WHITE);p1.setTextSize(30);c.drawText(english()?"Your food. Your control. Your progress.":"Sua comida. Seu controle. Seu progresso.",72,1255,p1);p1.setColor(0xFFA2ADA6);p1.setTextSize(21);c.drawText(english()?"Generated on Balyvo":"Gerado no Balyvo",72,1300,p1);return bm;}

  // ---------- Profile / language / units ----------
  @Override void weightDialog(){double shown=imperial()?weight()*2.2046226218:weight();EditText e=num(String.format(english()?Locale.US:new Locale("pt","BR"),"%.1f",shown));FrameLayout b=new FrameLayout(this);b.setPadding(dp(20),0,dp(20),0);b.addView(e,new FrameLayout.LayoutParams(-1,-2));new AlertDialog.Builder(this).setTitle(english()?"Log current weight":"Registrar peso atual").setMessage(imperial()?"lb":"kg").setView(b).setPositiveButton(i18n("Salvar"),(d,x)->{try{float z=Float.parseFloat(e.getText().toString().replace(',','.'));if(imperial())z=(float)(z/2.2046226218);p.edit().putFloat("weight",z).apply();show("progress");}catch(Exception ex){Toast.makeText(this,english()?"Invalid weight":"Peso inválido",Toast.LENGTH_SHORT).show();}}).setNegativeButton(i18n("Cancelar"),null).show();}
  @Override void profileDialog(){LinearLayout f=col();f.setPadding(dp(20),0,dp(20),0);double wv=imperial()?weight()*2.2046226218:weight(),gv=imperial()?goalWeight()*2.2046226218:goalWeight(),hv=imperial()?height()*39.37007874:height();EditText w=num(String.format(Locale.US,"%.1f",wv)),h=num(String.format(Locale.US,imperial()?"%.1f":"%.2f",hv)),g=num(String.format(Locale.US,"%.1f",gv)),c=num(""+goal());w.setHint(imperial()?"Weight (lb)":"Peso / Weight (kg)");h.setHint(imperial()?"Height (in)":"Altura / Height (m)");g.setHint(imperial()?"Goal weight (lb)":"Peso-meta / Goal (kg)");c.setHint(english()?"Daily calorie goal":"Meta de calorias");f.addView(w);f.addView(h);f.addView(g);f.addView(c);new AlertDialog.Builder(this).setTitle(english()?"Your Balyvo profile":"Seu perfil Balyvo").setView(f).setPositiveButton(i18n("Salvar"),(d,x)->{try{float ww=Float.parseFloat(w.getText().toString().replace(',','.')),hh=Float.parseFloat(h.getText().toString().replace(',','.')),gg=Float.parseFloat(g.getText().toString().replace(',','.'));if(imperial()){ww=(float)(ww/2.2046226218);gg=(float)(gg/2.2046226218);hh=(float)(hh/39.37007874);}p.edit().putFloat("weight",ww).putFloat("height",hh).putFloat("goalWeight",gg).putInt("goal",Integer.parseInt(c.getText().toString().replaceAll("[^0-9]",""))).apply();show("progress");}catch(Exception ex){Toast.makeText(this,english()?"Check the values":"Confira os valores",Toast.LENGTH_SHORT).show();}}).setNegativeButton(i18n("Cancelar"),null).show();}
  private void languageDialog(){String[] langs={"Automático / Automatic","Português (Brasil)","English"};String current=p.getString(KEY_LANG,"auto");int checked="pt".equals(current)?1:"en".equals(current)?2:0;new AlertDialog.Builder(this).setTitle(english()?"Language":"Idioma").setSingleChoiceItems(langs,checked,(d,w)->{String v=w==1?"pt":w==2?"en":"auto";p.edit().putString(KEY_LANG,v).apply();d.dismiss();unitDialog(true);}).setNegativeButton(i18n("Cancelar"),null).show();}
  private void unitDialog(boolean recreateAfter){String[] units={english()?"Automatic":"Automático",english()?"Metric (kg, cm, L)":"Métrico (kg, cm, L)","US (lb, in, fl oz)"};String current=p.getString(KEY_UNITS,"auto");int checked="metric".equals(current)?1:"imperial".equals(current)?2:0;new AlertDialog.Builder(this).setTitle(english()?"Units":"Unidades").setSingleChoiceItems(units,checked,(d,w)->{p.edit().putString(KEY_UNITS,w==1?"metric":w==2?"imperial":"auto").apply();d.dismiss();if(recreateAfter)recreate();}).setNegativeButton(i18n("Cancelar"),null).show();}

  // ---------- Pro gate compatibility ----------
  private boolean v7HasProAccess(){try{java.lang.reflect.Method m=MainActivityV6.class.getDeclaredMethod("hasProAccess");m.setAccessible(true);return (Boolean)m.invoke(this);}catch(Exception e){long start=p.getLong("pro_local_trial_started_v1",0L);return start>0&&System.currentTimeMillis()-start<5L*24L*60L*60L*1000L;}}
  private boolean requirePro(){if(v7HasProAccess())return true;openExistingPaywall();return false;}
  private void openExistingPaywall(){try{java.lang.reflect.Method m=MainActivityV6.class.getDeclaredMethod("showPaywall");m.setAccessible(true);m.invoke(this);}catch(Exception e){new AlertDialog.Builder(this).setTitle("Balyvo Pro").setMessage(english()?"This feature is part of Balyvo Pro. Start the free trial to unlock it.":"Este recurso faz parte do Balyvo Pro. Inicie o teste grátis para liberar.").setPositiveButton("OK",null).show();}}
  private View paywallPreview(){LinearLayout v=card();v.addView(txt(english()?"PRO FEATURES":"RECURSOS PRO",9,NEON,true),match());v.addView(txt(english()?"Daily intelligence, plate scan, weekly plan, Stories and challenges are included in Pro.":"Inteligência diária, análise do prato, plano semanal, Stories e desafios fazem parte do Pro.",12,TEXT,true),withTop(match(),6));TextView b=button(english()?"Unlock Balyvo Pro":"Liberar Balyvo Pro");b.setOnClickListener(x->openExistingPaywall());v.addView(b,withTop(match(),12));return v;}
}
