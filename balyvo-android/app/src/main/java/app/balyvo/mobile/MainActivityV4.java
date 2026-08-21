package app.balyvo.mobile;

import android.app.*;
import android.os.*;
import android.graphics.*;
import android.graphics.drawable.GradientDrawable;
import android.text.*;
import android.text.style.ForegroundColorSpan;
import android.util.Base64;
import android.view.*;
import android.widget.*;
import java.io.*;
import java.net.*;
import java.util.*;
import java.util.concurrent.*;

public class MainActivityV4 extends MainActivityV31 {
  private final Handler carouselHandler=new Handler(Looper.getMainLooper());
  private final ExecutorService heroPool=Executors.newFixedThreadPool(3);
  private final Bitmap[] heroSlides=new Bitmap[4];
  private final String[] heroUrls={
      null,
      "https://images.pexels.com/photos/9219289/pexels-photo-9219289.jpeg?auto=compress&cs=tinysrgb&w=720&h=1280&fit=crop",
      "https://images.pexels.com/photos/34284708/pexels-photo-34284708.jpeg?auto=compress&cs=tinysrgb&w=720&h=1280&fit=crop",
      "https://images.pexels.com/photos/6412882/pexels-photo-6412882.jpeg?auto=compress&cs=tinysrgb&w=720&h=1280&fit=crop"
  };
  private final String[] heroTitles={
      "Boas escolhas hoje,\nresultados amanhã.",
      "Sua rotina. Seu ritmo.\nSeu progresso.",
      "Comida brasileira.\nControle de verdade.",
      "Hábitos melhores.\nUm dia de cada vez."
  };
  private final String[] heroHighlights={"resultados","progresso","Controle","melhores"};
  private final String[] heroSubs={
      "Pratos brasileiros, calorias, macros, água e evolução em um só lugar.",
      "Acompanhe sem complicação e mantenha o foco no que cabe na sua vida real.",
      "Arroz, feijão, carnes, frango e muito mais com referências práticas de porção.",
      "Constância vale mais do que perfeição. Registre, acompanhe e continue evoluindo."
  };

  private ImageView heroView;
  private LinearLayout indicators;
  private TextView headline,subline,slideLabel;
  private int heroIndex=0;
  private boolean splashActive=false;
  private float touchDownX=0f;

  private final Runnable autoRotate=new Runnable(){
    @Override public void run(){if(!splashActive)return;moveHero(1);carouselHandler.postDelayed(this,4500);}
  };

  private Bitmap loadLocalHero(){
    try{
      int[] ids={R.raw.hero_a,R.raw.hero_b,R.raw.hero_c,R.raw.hero_d,R.raw.hero_e,R.raw.hero_f};
      StringBuilder encoded=new StringBuilder(60000);
      for(int id:ids){BufferedReader br=new BufferedReader(new InputStreamReader(getResources().openRawResource(id)));String line;while((line=br.readLine())!=null)encoded.append(line.trim());br.close();}
      byte[] image=Base64.decode(encoded.toString(),Base64.DEFAULT);return BitmapFactory.decodeByteArray(image,0,image.length);
    }catch(Exception e){return null;}
  }

  private void preloadRemoteHeroes(){for(int i=1;i<heroUrls.length;i++)loadRemoteHero(i);}

  private void loadRemoteHero(final int index){
    heroPool.execute(()->{
      try{
        File cache=new File(getFilesDir(),"hero_carousel_0_4_"+index+".jpg");byte[] bytes;
        if(cache.exists()&&cache.length()>1024){
          FileInputStream in=new FileInputStream(cache);ByteArrayOutputStream out=new ByteArrayOutputStream();byte[] buf=new byte[8192];int n;
          while((n=in.read(buf))>0)out.write(buf,0,n);in.close();bytes=out.toByteArray();
        }else{
          HttpURLConnection c=(HttpURLConnection)new URL(heroUrls[index]).openConnection();c.setConnectTimeout(6500);c.setReadTimeout(9000);c.setInstanceFollowRedirects(true);c.setRequestProperty("User-Agent","Balyvo-Android/0.4.0");
          InputStream in=c.getInputStream();ByteArrayOutputStream out=new ByteArrayOutputStream();byte[] buf=new byte[8192];int n;while((n=in.read(buf))>0)out.write(buf,0,n);in.close();c.disconnect();bytes=out.toByteArray();
          FileOutputStream fos=new FileOutputStream(cache);fos.write(bytes);fos.close();
        }
        Bitmap bm=BitmapFactory.decodeByteArray(bytes,0,bytes.length);
        if(bm!=null)runOnUiThread(()->{heroSlides[index]=bm;if(splashActive&&heroIndex==index)applyHero(index,false);});
      }catch(Exception ignored){}
    });
  }

  @Override void splash(){
    splashActive=true;heroSlides[0]=loadLocalHero();
    FrameLayout root=new FrameLayout(this);root.setBackgroundColor(NIGHT);
    heroView=new ImageView(this);heroView.setScaleType(ImageView.ScaleType.CENTER_CROP);heroView.setAdjustViewBounds(false);if(heroSlides[0]!=null)heroView.setImageBitmap(heroSlides[0]);root.addView(heroView,new FrameLayout.LayoutParams(-1,-1));
    View shade=new View(this);GradientDrawable gradient=new GradientDrawable(GradientDrawable.Orientation.TOP_BOTTOM,new int[]{0x09050807,0x16050807,0xA8050807,0xFF050807});shade.setBackground(gradient);root.addView(shade,new FrameLayout.LayoutParams(-1,-1));

    LinearLayout brand=row();brand.setGravity(Gravity.CENTER_VERTICAL);ImageView icon=new ImageView(this);icon.setImageResource(R.drawable.ic_balyvo);brand.addView(icon,new LinearLayout.LayoutParams(dp(54),dp(54)));LinearLayout brandText=col();LinearLayout.LayoutParams btp=new LinearLayout.LayoutParams(0,-2,1);btp.leftMargin=dp(10);brand.addView(brandText,btp);brandText.addView(txt("Balyvo",23,TEXT,true),match());brandText.addView(txt("NUTRIÇÃO PARA A VIDA REAL",8,NEON,true),match());TextView version=txt("PREMIUM 0.4.0",8,NIGHT,true);version.setGravity(Gravity.CENTER);version.setPadding(dp(10),dp(6),dp(10),dp(6));version.setBackground(bg(NEON,99,0,0));brand.addView(version,wrap());FrameLayout.LayoutParams brandLp=new FrameLayout.LayoutParams(-1,-2,Gravity.TOP);brandLp.setMargins(dp(24),dp(30),dp(24),0);root.addView(brand,brandLp);

    LinearLayout content=col();content.setPadding(dp(26),dp(20),dp(26),dp(28));slideLabel=txt("VIDA REAL · 1/4",9,NEON,true);slideLabel.setLetterSpacing(.12f);content.addView(slideLabel,match());headline=txt("",31,TEXT,true);headline.setMinLines(2);headline.setMaxLines(2);LinearLayout.LayoutParams htp=match();htp.topMargin=dp(6);content.addView(headline,htp);subline=txt("",12,SOFT,false);subline.setMinLines(2);subline.setMaxLines(2);LinearLayout.LayoutParams subp=match();subp.topMargin=dp(9);content.addView(subline,subp);indicators=row();LinearLayout.LayoutParams ip=match();ip.topMargin=dp(18);ip.bottomMargin=dp(18);content.addView(indicators,ip);
    TextView start=txt("Começar",16,NIGHT,true);start.setGravity(Gravity.CENTER);start.setBackground(bg(NEON,24,0,0));start.setOnClickListener(v->shell());content.addView(start,new LinearLayout.LayoutParams(-1,dp(58)));TextView proof=txt("CARROSSEL ATIVO · AUTO + SWIPE · BUILD 0.4.0",8,SOFT,true);proof.setGravity(Gravity.CENTER);LinearLayout.LayoutParams pp=match();pp.topMargin=dp(11);content.addView(proof,pp);FrameLayout.LayoutParams clp=new FrameLayout.LayoutParams(-1,-2,Gravity.BOTTOM);root.addView(content,clp);

    heroView.setOnTouchListener((v,e)->{if(e.getAction()==MotionEvent.ACTION_DOWN){touchDownX=e.getX();carouselHandler.removeCallbacks(autoRotate);return true;}if(e.getAction()==MotionEvent.ACTION_UP||e.getAction()==MotionEvent.ACTION_CANCEL){float dx=e.getX()-touchDownX;if(Math.abs(dx)>dp(42))moveHero(dx<0?1:-1);carouselHandler.removeCallbacks(autoRotate);carouselHandler.postDelayed(autoRotate,5000);return true;}return true;});
    applyHero(0,false);preloadRemoteHeroes();carouselHandler.postDelayed(autoRotate,4500);setContentView(root);root.setAlpha(0f);root.animate().alpha(1f).setDuration(350).start();
  }

  private void moveHero(int direction){for(int step=1;step<=4;step++){int candidate=(heroIndex+direction*step)%4;if(candidate<0)candidate+=4;if(heroSlides[candidate]!=null){applyHero(candidate,true);return;}}}
  private void applyHero(int index,boolean animate){if(index<0||index>=heroSlides.length||heroSlides[index]==null)return;heroIndex=index;Runnable set=()->{heroView.setImageBitmap(heroSlides[index]);heroView.setAlpha(1f);};if(animate)heroView.animate().alpha(0f).setDuration(150).withEndAction(()->{set.run();heroView.animate().alpha(1f).setDuration(230).start();}).start();else set.run();updateHeroCopy();updateIndicators();}
  private void updateHeroCopy(){String full=heroTitles[heroIndex],hi=heroHighlights[heroIndex];SpannableString sp=new SpannableString(full);int at=full.toLowerCase(Locale.ROOT).indexOf(hi.toLowerCase(Locale.ROOT));if(at>=0)sp.setSpan(new ForegroundColorSpan(NEON),at,at+hi.length(),Spannable.SPAN_EXCLUSIVE_EXCLUSIVE);headline.setText(sp);subline.setText(heroSubs[heroIndex]);slideLabel.setText("VIDA REAL · "+(heroIndex+1)+"/4");}
  private void updateIndicators(){indicators.removeAllViews();for(int i=0;i<4;i++){boolean active=i==heroIndex;View bar=new View(this);bar.setBackground(bg(active?NEON:LINE,99,0,0));LinearLayout.LayoutParams bp=new LinearLayout.LayoutParams(active?dp(42):dp(27),dp(5));bp.rightMargin=dp(7);indicators.addView(bar,bp);final int target=i;bar.setOnClickListener(v->{if(heroSlides[target]!=null){applyHero(target,true);carouselHandler.removeCallbacks(autoRotate);carouselHandler.postDelayed(autoRotate,5000);}});}}

  @Override void shell(){splashActive=false;carouselHandler.removeCallbacks(autoRotate);super.shell();}
  @Override protected void onDestroy(){splashActive=false;carouselHandler.removeCallbacksAndMessages(null);heroPool.shutdownNow();super.onDestroy();}

  private Set<String> favorites(){return new HashSet<>(p.getStringSet("favorites",Collections.emptySet()));}
  private void toggleFavorite(Meal m){Set<String> set=favorites();if(set.contains(m.n))set.remove(m.n);else set.add(m.n);p.edit().putStringSet("favorites",set).apply();}

  @Override View home(){
    ScrollView s=(ScrollView)super.home();LinearLayout q=(LinearLayout)s.getChildAt(0);if(q.getChildCount()>0&&q.getChildAt(0) instanceof TextView)q.removeViewAt(0);TextView audit=txt("CARROSSEL + FAVORITOS + REGISTRO MANUAL · v0.4.0",9,NIGHT,true);audit.setGravity(Gravity.CENTER);audit.setPadding(dp(12),dp(8),dp(12),dp(8));audit.setBackground(bg(NEON,99,0,0));LinearLayout.LayoutParams ap=match();ap.bottomMargin=dp(14);q.addView(audit,0,ap);
    LinearLayout tools=row();TextView fav=actionCard("★","Favoritos","Seus pratos salvos");fav.setOnClickListener(v->{cat="Favoritos";show("meals");});tools.addView(fav,new LinearLayout.LayoutParams(0,dp(92),1));spacer(tools,10);TextView manual=actionCard("✎","Registro manual","Nome + calorias");manual.setOnClickListener(v->manualEntryDialog());tools.addView(manual,new LinearLayout.LayoutParams(0,dp(92),1));LinearLayout.LayoutParams tp=match();tp.topMargin=dp(16);int at=Math.max(1,q.getChildCount()-1);q.addView(tools,at,tp);return s;
  }

  @Override View mealScreen(){
    LinearLayout root=col();root.setBackgroundColor(NIGHT);LinearLayout top=page();top.setPadding(dp(20),dp(16),dp(20),dp(4));TextView k=txt("BIBLIOTECA BRASILEIRA",9,NEON,true);k.setLetterSpacing(.16f);top.addView(k,match());TextView t=txt("O que entrou no prato?",29,TEXT,true);LinearLayout.LayoutParams tp=match();tp.topMargin=dp(4);top.addView(t,tp);top.addView(txt("Busque, favorite ou registre manualmente em segundos.",11,SOFT,false),match());EditText search=new EditText(this);search.setHint("Buscar arroz, frango, macarrão...");search.setSingleLine();search.setTextColor(TEXT);search.setHintTextColor(SOFT);search.setTextSize(13);search.setPadding(dp(15),dp(11),dp(15),dp(11));search.setBackground(bg(SURFACE2,18,LINE,1));LinearLayout.LayoutParams sep=match();sep.topMargin=dp(14);top.addView(search,sep);TextView manual=txt("✎  Registrar alimento/calorias manualmente",11,NEON,true);manual.setGravity(Gravity.CENTER);manual.setPadding(dp(12),dp(11),dp(12),dp(11));manual.setBackground(bg(SURFACE,16,LINE,1));manual.setOnClickListener(v->manualEntryDialog());LinearLayout.LayoutParams mp=match();mp.topMargin=dp(9);top.addView(manual,mp);root.addView(top,match());
    HorizontalScrollView hs=new HorizontalScrollView(this);hs.setHorizontalScrollBarEnabled(false);LinearLayout ch=row();ch.setPadding(dp(20),dp(7),dp(20),dp(7));hs.addView(ch,wrap());String[] cats={"Todos","Favoritos","Brasileiro","Massas","Ovos","Carnes","Frango","Peixes","Frutos do mar","Churrasco"};for(String c:cats){boolean on=c.equals(cat);TextView z=txt(c,10,on?NIGHT:SOFT,true);z.setGravity(Gravity.CENTER);z.setPadding(dp(14),dp(9),dp(14),dp(9));z.setBackground(bg(on?NEON:SURFACE,99,on?NEON:LINE,1));LinearLayout.LayoutParams zp=wrap();zp.rightMargin=dp(8);ch.addView(z,zp);z.setOnClickListener(v->{cat=((TextView)v).getText().toString();show("meals");});}root.addView(hs,new LinearLayout.LayoutParams(-1,dp(56)));
    ScrollView sc=scroll();LinearLayout list=col();list.setPadding(dp(20),dp(3),dp(20),dp(25));sc.addView(list);root.addView(sc,new LinearLayout.LayoutParams(-1,0,1));Runnable r=()->renderMeals(list,search.getText().toString());search.addTextChangedListener(new TextWatcher(){public void beforeTextChanged(CharSequence s,int a,int b,int c){}public void onTextChanged(CharSequence s,int a,int b,int c){r.run();}public void afterTextChanged(Editable e){}});renderMeals(list,"");return root;
  }

  @Override void renderMeals(LinearLayout list,String query){
    list.removeAllViews();String x=query.toLowerCase(Locale.ROOT).trim();Set<String> favs=favorites();int n=0;for(Meal m:meals){if(cat.equals("Favoritos")&&!favs.contains(m.n))continue;if(!cat.equals("Todos")&&!cat.equals("Favoritos")&&!cat.equals(m.c))continue;if(!x.isEmpty()&&!m.n.toLowerCase(Locale.ROOT).contains(x))continue;n++;LinearLayout v=row();v.setGravity(Gravity.CENTER_VERTICAL);v.setPadding(dp(13),dp(13),dp(13),dp(13));v.setBackground(bg(SURFACE,20,LINE,1));TextView em=txt(m.e,26,TEXT,false);em.setGravity(Gravity.CENTER);em.setBackground(bg(SURFACE2,15,LINE,1));v.addView(em,new LinearLayout.LayoutParams(dp(54),dp(54)));LinearLayout inf=col();LinearLayout.LayoutParams ip=new LinearLayout.LayoutParams(0,-2,1);ip.leftMargin=dp(12);v.addView(inf,ip);inf.addView(txt(m.n,13,TEXT,true),match());inf.addView(txt(m.c+" · "+m.d,9,SOFT,false),match());LinearLayout side=col();side.setGravity(Gravity.CENTER_HORIZONTAL);boolean fav=favs.contains(m.n);TextView star=txt(fav?"★":"☆",22,fav?NEON:SOFT,true);star.setGravity(Gravity.CENTER);star.setPadding(dp(8),dp(2),dp(8),dp(2));star.setOnClickListener(a->{toggleFavorite(m);renderMeals(list,query);});side.addView(star,wrap());side.addView(txt(m.k+" kcal",10,NEON,true),wrap());v.addView(side,wrap());v.setOnClickListener(a->portion(m));LinearLayout.LayoutParams vp=match();vp.bottomMargin=dp(9);list.addView(v,vp);}if(n==0){String msg=cat.equals("Favoritos")?"Nenhum favorito ainda. Toque na estrela de um prato para salvar.":"Nenhum prato encontrado.";TextView e=txt(msg,12,SOFT,true);e.setGravity(Gravity.CENTER);e.setPadding(dp(18),dp(35),dp(18),0);list.addView(e,match());}
  }

  private void manualEntryDialog(){
    LinearLayout box=col();box.setPadding(dp(20),dp(4),dp(20),0);EditText name=new EditText(this);name.setHint("Ex.: Iogurte com banana");name.setSingleLine();box.addView(name,match());EditText kcal=num("");kcal.setHint("Calorias da porção");LinearLayout.LayoutParams kp=match();kp.topMargin=dp(8);box.addView(kcal,kp);AlertDialog d=new AlertDialog.Builder(this).setTitle("Registro manual").setMessage("Use quando o alimento não estiver na biblioteca.").setView(box).setNegativeButton("Cancelar",null).setPositiveButton("Continuar",null).create();d.setOnShowListener(x->d.getButton(-1).setOnClickListener(v->{String n=name.getText().toString().trim();String ks=kcal.getText().toString().trim();if(n.isEmpty()||ks.isEmpty()){Toast.makeText(this,"Preencha nome e calorias.",Toast.LENGTH_SHORT).show();return;}try{int value=Integer.parseInt(ks);if(value<1||value>5000)throw new NumberFormatException();Meal m=new Meal(n,"✎","Personalizado","Registro manual",value);d.dismiss();slot(m,value,"Manual");}catch(Exception ex){Toast.makeText(this,"Informe calorias válidas.",Toast.LENGTH_SHORT).show();}}));d.show();
  }
}
