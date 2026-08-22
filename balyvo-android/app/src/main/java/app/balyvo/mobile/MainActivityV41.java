package app.balyvo.mobile;

import android.view.*;
import android.widget.*;

/**
 * Camada de acabamento para distribuição pública.
 * Mantém todos os recursos da 0.4.0 e remove marcadores internos de build da UI.
 */
public class MainActivityV41 extends MainActivityV4 {

  @Override void splash(){
    super.splash();
    View root=getWindow().getDecorView();
    TextView badge=findText(root,"PREMIUM 0.4.0");
    if(badge!=null) badge.setText("VIDA REAL");
    TextView build=findText(root,"CARROSSEL ATIVO · AUTO + SWIPE · BUILD 0.4.0");
    if(build!=null) build.setVisibility(View.GONE);
  }

  @Override View home(){
    ScrollView s=(ScrollView)super.home();
    LinearLayout q=(LinearLayout)s.getChildAt(0);
    if(q.getChildCount()>0 && q.getChildAt(0) instanceof TextView){
      TextView first=(TextView)q.getChildAt(0);
      if(first.getText()!=null && first.getText().toString().startsWith("CARROSSEL + FAVORITOS")){
        q.removeViewAt(0);
      }
    }
    return s;
  }

  private TextView findText(View view,String exact){
    if(view instanceof TextView){
      TextView t=(TextView)view;
      if(t.getText()!=null && exact.contentEquals(t.getText())) return t;
    }
    if(view instanceof ViewGroup){
      ViewGroup g=(ViewGroup)view;
      for(int i=0;i<g.getChildCount();i++){
        TextView found=findText(g.getChildAt(i),exact);
        if(found!=null) return found;
      }
    }
    return null;
  }
}
