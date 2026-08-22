package app.balyvo.mobile;

import android.app.*;
import android.os.*;
import android.content.*;
import android.content.pm.InstallSourceInfo;
import android.view.*;
import android.widget.*;
import com.android.billingclient.api.*;
import java.util.*;

/** Balyvo 0.6.0 — fundação de monetização: teste Pro + Google Play Billing. */
public class MainActivityV6 extends MainActivityV5 {
  private static final String PRODUCT_ID="balyvo_pro_monthly";
  private static final String KEY_LOCAL_TRIAL="pro_local_trial_started_v1";
  private static final String KEY_PAYWALL_SEEN="pro_paywall_seen_v1";
  private static final long DAY=24L*60L*60L*1000L;
  private static final long LOCAL_TRIAL=5L*DAY;

  private BillingClient billingClient;
  private ProductDetails monthlyProduct;
  private String fiveDayOfferToken;
  private String localizedMonthlyPrice="R$ 11,90/mês";
  private boolean playEntitled=false;
  private boolean installedFromPlay=false;
  private boolean billingReady=false;

  @Override public void onCreate(Bundle b){
    super.onCreate(b);
    installedFromPlay=isInstalledFromPlay();
    // APKs instaladas manualmente recebem uma prévia local de 5 dias apenas para teste.
    // Na Google Play, o período grátis é controlado pela própria oferta P5D do Play Console.
    if(!installedFromPlay && p.getLong(KEY_LOCAL_TRIAL,0L)==0L){
      p.edit().putLong(KEY_LOCAL_TRIAL,System.currentTimeMillis()).apply();
    }
    initBilling();
  }

  @Override protected void onResume(){
    super.onResume();
    if(billingClient!=null && billingClient.isReady()) queryOwnedSubscription();
  }

  @Override protected void onDestroy(){
    if(billingClient!=null && billingClient.isReady()) billingClient.endConnection();
    super.onDestroy();
  }

  @Override View home(){
    ScrollView s=(ScrollView)super.home();
    LinearLayout q=(LinearLayout)s.getChildAt(0);
    LinearLayout pro=buildProCard();
    LinearLayout.LayoutParams lp=match();lp.topMargin=dp(10);lp.bottomMargin=dp(10);
    q.addView(pro,Math.min(1,q.getChildCount()),lp);
    applyHomePremiumGates(q);
    return s;
  }

  @Override View progress(){
    ScrollView s=(ScrollView)super.progress();
    if(!hasProAccess()){
      LinearLayout q=(LinearLayout)s.getChildAt(0);
      TextView share=findText(q,"Compartilhar meu progresso");
      if(share!=null){share.setAlpha(.72f);share.setOnClickListener(v->showPaywall());}
    }
    return s;
  }

  private LinearLayout buildProCard(){
    LinearLayout box=card();
    boolean access=hasProAccess();
    String eyebrow,headline,detail,buttonLabel;
    if(playEntitled){
      eyebrow="BALYVO PRO ATIVO";
      headline="Seu Pro está liberado.";
      detail="Assinatura ativa pela Google Play.";
      buttonLabel="Gerenciar Pro";
    }else if(localTrialActive()){
      int days=localTrialDaysLeft();
      eyebrow="BALYVO PRO · TESTE GRÁTIS";
      headline=days==1?"Último dia do seu Pro.":days+" dias de Pro liberados.";
      detail=days==1?"Seu período de teste termina amanhã.":"Explore os recursos Pro antes de decidir.";
      buttonLabel="Ver Balyvo Pro";
    }else if(installedFromPlay){
      eyebrow="5 DIAS GRÁTIS";
      headline="Experimente o Balyvo Pro.";
      detail="Ative pela Google Play. Depois do teste, a assinatura renova mensalmente até você cancelar.";
      buttonLabel="Começar 5 dias grátis";
    }else{
      eyebrow="TESTE PRO ENCERRADO";
      headline="Continue com o Balyvo Pro.";
      detail="Nesta APK de teste não existe cobrança automática. A assinatura real será ativada pela Google Play.";
      buttonLabel="Ver assinatura";
    }
    TextView e=txt(eyebrow,9,NEON,true);e.setLetterSpacing(.12f);box.addView(e,match());
    TextView h=txt(headline,20,TEXT,true);LinearLayout.LayoutParams hp=match();hp.topMargin=dp(5);box.addView(h,hp);
    TextView d=txt(detail,11,SOFT,false);LinearLayout.LayoutParams dp1=match();dp1.topMargin=dp(5);box.addView(d,dp1);
    TextView price=txt(localizedMonthlyPrice,13,NEON,true);LinearLayout.LayoutParams pp=match();pp.topMargin=dp(10);box.addView(price,pp);
    TextView b=button(buttonLabel);LinearLayout.LayoutParams bp=match();bp.topMargin=dp(12);box.addView(b,bp);
    b.setOnClickListener(v->showPaywall());
    return box;
  }

  private void applyHomePremiumGates(View root){
    if(hasProAccess()) return;
    TextView progressCard=findText(root,"Meu progresso");
    if(progressCard!=null){progressCard.setAlpha(.72f);progressCard.setOnClickListener(v->showPaywall());}
    TextView achievement=findText(root,"Compartilhar conquista");
    if(achievement!=null){achievement.setAlpha(.72f);achievement.setOnClickListener(v->showPaywall());}
    // Compartilhar o próprio Balyvo continua gratuito para ajudar o crescimento orgânico.
  }

  private void showPaywall(){
    LinearLayout v=col();v.setPadding(dp(22),dp(10),dp(22),dp(4));
    v.addView(txt("BALYVO PRO",10,NEON,true),match());
    TextView title=txt("5 dias grátis. Depois, "+localizedMonthlyPrice+".",24,TEXT,true);
    LinearLayout.LayoutParams tp=match();tp.topMargin=dp(6);v.addView(title,tp);
    TextView sub=txt("Teste o Pro completo. Cancele antes do fim do período grátis para não iniciar a cobrança mensal.",12,SOFT,false);
    LinearLayout.LayoutParams sp=match();sp.topMargin=dp(9);v.addView(sub,sp);
    String[] benefits={
      "✓ Cards premium de progresso",
      "✓ Conquistas compartilháveis",
      "✓ Recursos Pro liberados durante o teste",
      "✓ Próximos recursos inteligentes incluídos no Pro"
    };
    for(String item:benefits){TextView t=txt(item,13,TEXT,true);LinearLayout.LayoutParams x=match();x.topMargin=dp(9);v.addView(t,x);}
    if(!installedFromPlay){
      TextView note=txt("Esta instalação é uma APK de teste: não há cobrança real nela. A renovação automática só funciona quando o Balyvo estiver instalado pela Google Play.",10,SOFT,false);
      LinearLayout.LayoutParams np=match();np.topMargin=dp(15);v.addView(note,np);
    }else if(monthlyProduct==null || fiveDayOfferToken==null){
      TextView note=txt("A oferta de 5 dias ainda não está disponível nesta instalação. O Balyvo não iniciará uma cobrança sem a oferta gratuita correta configurada na Google Play.",10,SOFT,false);
      LinearLayout.LayoutParams np=match();np.topMargin=dp(15);v.addView(note,np);
    }

    AlertDialog d=new AlertDialog.Builder(this)
      .setView(v)
      .setNegativeButton("Agora não",null)
      .setNeutralButton("Restaurar compra",null)
      .setPositiveButton(playEntitled?"Pro ativo":"Começar 5 dias grátis",null)
      .create();
    d.setOnShowListener(x->{
      d.getButton(AlertDialog.BUTTON_NEUTRAL).setOnClickListener(z->queryOwnedSubscription());
      d.getButton(AlertDialog.BUTTON_POSITIVE).setOnClickListener(z->{
        if(playEntitled){Toast.makeText(this,"Seu Balyvo Pro está ativo.",Toast.LENGTH_SHORT).show();return;}
        if(!installedFromPlay){Toast.makeText(this,"A cobrança real será ativada na versão da Google Play.",Toast.LENGTH_LONG).show();return;}
        launchFiveDayTrial();
      });
    });
    d.show();
  }

  private boolean hasProAccess(){return playEntitled || localTrialActive();}

  private boolean localTrialActive(){
    if(installedFromPlay) return false;
    long start=p.getLong(KEY_LOCAL_TRIAL,0L);
    return start>0L && System.currentTimeMillis()-start<LOCAL_TRIAL;
  }

  private int localTrialDaysLeft(){
    long start=p.getLong(KEY_LOCAL_TRIAL,0L);
    long remaining=Math.max(0L,LOCAL_TRIAL-(System.currentTimeMillis()-start));
    return Math.max(1,(int)Math.ceil(remaining/(double)DAY));
  }

  private boolean isInstalledFromPlay(){
    try{
      String installer;
      if(Build.VERSION.SDK_INT>=30){
        InstallSourceInfo info=getPackageManager().getInstallSourceInfo(getPackageName());
        installer=info.getInstallingPackageName();
      }else{
        installer=getPackageManager().getInstallerPackageName(getPackageName());
      }
      return "com.android.vending".equals(installer);
    }catch(Exception e){return false;}
  }

  private void initBilling(){
    try{
      PendingPurchasesParams pending=PendingPurchasesParams.newBuilder().enableOneTimeProducts().build();
      billingClient=BillingClient.newBuilder(this)
        .setListener((result,purchases)->{
          if(result.getResponseCode()==BillingClient.BillingResponseCode.OK && purchases!=null) handlePurchases(purchases);
        })
        .enablePendingPurchases(pending)
        .enableAutoServiceReconnection()
        .build();
      billingClient.startConnection(new BillingClientStateListener(){
        @Override public void onBillingSetupFinished(BillingResult result){
          billingReady=result.getResponseCode()==BillingClient.BillingResponseCode.OK;
          if(billingReady){queryProduct();queryOwnedSubscription();}
        }
        @Override public void onBillingServiceDisconnected(){billingReady=false;}
      });
    }catch(Exception e){billingReady=false;}
  }

  private void queryProduct(){
    if(billingClient==null || !billingClient.isReady()) return;
    QueryProductDetailsParams.Product product=QueryProductDetailsParams.Product.newBuilder()
      .setProductId(PRODUCT_ID)
      .setProductType(BillingClient.ProductType.SUBS)
      .build();
    QueryProductDetailsParams params=QueryProductDetailsParams.newBuilder()
      .setProductList(Collections.singletonList(product)).build();
    billingClient.queryProductDetailsAsync(params,new ProductDetailsResponseListener(){
      @Override public void onProductDetailsResponse(BillingResult result,QueryProductDetailsResult detailsResult){
        if(result.getResponseCode()!=BillingClient.BillingResponseCode.OK) return;
        List<ProductDetails> list=detailsResult.getProductDetailsList();
        if(list==null || list.isEmpty()) return;
        monthlyProduct=list.get(0);
        selectSafeFiveDayOffer(monthlyProduct);
        runOnUiThread(()->{
          if(body!=null && "home".equals(tab)) show("home");
          if(installedFromPlay && !playEntitled && fiveDayOfferToken!=null && !p.getBoolean(KEY_PAYWALL_SEEN,false)){
            p.edit().putBoolean(KEY_PAYWALL_SEEN,true).apply();
            new Handler(Looper.getMainLooper()).postDelayed(()->showPaywall(),500);
          }
        });
      }
    });
  }

  private void selectSafeFiveDayOffer(ProductDetails product){
    fiveDayOfferToken=null;
    List<ProductDetails.SubscriptionOfferDetails> offers=product.getSubscriptionOfferDetails();
    if(offers==null) return;
    for(ProductDetails.SubscriptionOfferDetails offer:offers){
      List<ProductDetails.PricingPhase> phases=offer.getPricingPhases().getPricingPhaseList();
      boolean exactFiveDayFree=false;
      String paidPrice=null;
      for(ProductDetails.PricingPhase phase:phases){
        if(phase.getPriceAmountMicros()==0L && "P5D".equalsIgnoreCase(phase.getBillingPeriod())) exactFiveDayFree=true;
        if(phase.getPriceAmountMicros()>0L) paidPrice=phase.getFormattedPrice()+"/mês";
      }
      if(exactFiveDayFree){
        fiveDayOfferToken=offer.getOfferToken();
        if(paidPrice!=null) localizedMonthlyPrice=paidPrice;
        return;
      }
    }
  }

  private void queryOwnedSubscription(){
    if(billingClient==null || !billingClient.isReady()) return;
    QueryPurchasesParams params=QueryPurchasesParams.newBuilder().setProductType(BillingClient.ProductType.SUBS).build();
    billingClient.queryPurchasesAsync(params,(result,purchases)->{
      if(result.getResponseCode()==BillingClient.BillingResponseCode.OK) handlePurchases(purchases);
    });
  }

  private void handlePurchases(List<Purchase> purchases){
    boolean active=false;
    if(purchases!=null){
      for(Purchase purchase:purchases){
        if(purchase.getProducts().contains(PRODUCT_ID) && purchase.getPurchaseState()==Purchase.PurchaseState.PURCHASED){
          active=true;
          if(!purchase.isAcknowledged()){
            AcknowledgePurchaseParams ack=AcknowledgePurchaseParams.newBuilder().setPurchaseToken(purchase.getPurchaseToken()).build();
            billingClient.acknowledgePurchase(ack,result->{});
          }
        }
      }
    }
    final boolean newState=active;
    runOnUiThread(()->{
      boolean changed=playEntitled!=newState;
      playEntitled=newState;
      if(changed && body!=null && "home".equals(tab)) show("home");
    });
  }

  private void launchFiveDayTrial(){
    if(!billingReady || billingClient==null || !billingClient.isReady()){
      Toast.makeText(this,"Google Play ainda não está pronta. Tente novamente em instantes.",Toast.LENGTH_LONG).show();return;
    }
    if(monthlyProduct==null || fiveDayOfferToken==null){
      Toast.makeText(this,"A oferta segura de 5 dias grátis ainda não foi configurada na Google Play.",Toast.LENGTH_LONG).show();return;
    }
    BillingFlowParams.ProductDetailsParams productParams=BillingFlowParams.ProductDetailsParams.newBuilder()
      .setProductDetails(monthlyProduct)
      .setOfferToken(fiveDayOfferToken)
      .build();
    BillingFlowParams flow=BillingFlowParams.newBuilder().setProductDetailsParamsList(Collections.singletonList(productParams)).build();
    BillingResult result=billingClient.launchBillingFlow(this,flow);
    if(result.getResponseCode()!=BillingClient.BillingResponseCode.OK){
      Toast.makeText(this,"Não foi possível abrir a assinatura agora.",Toast.LENGTH_LONG).show();
    }
  }

  private TextView findText(View root,String exact){
    if(root instanceof TextView && exact.contentEquals(((TextView)root).getText())) return (TextView)root;
    if(root instanceof ViewGroup){
      ViewGroup g=(ViewGroup)root;
      for(int i=0;i<g.getChildCount();i++){TextView r=findText(g.getChildAt(i),exact);if(r!=null)return r;}
    }
    return null;
  }
}
