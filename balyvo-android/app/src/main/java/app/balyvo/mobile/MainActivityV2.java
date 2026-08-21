package app.balyvo.mobile;

class MainActivityV2 extends MainActivity {
  @Override void seed() {
    meals.clear();
    String data = """
Arroz, feijão e 2 ovos cozidos|🥚|Brasileiro|Porção caseira padrão|410
Arroz, feijão e 2 ovos fritos|🍳|Brasileiro|Ovos com pouco óleo|470
Arroz, feijão, ovo e salada|🥗|Brasileiro|1 ovo, arroz, feijão e salada|430
Arroz, feijão, 2 ovos e salada|🥗|Brasileiro|2 ovos, arroz, feijão e salada|500
Arroz, feijão, bife e salada|🍛|Brasileiro|PF brasileiro com bife grelhado|610
Arroz, feijão, frango e salada|🍛|Brasileiro|PF brasileiro com frango grelhado|550
Arroz, feijão, carne moída e salada|🍛|Brasileiro|PF com carne moída refogada|590
Arroz, feijão, linguiça e salada|🍛|Brasileiro|PF com linguiça grelhada|680
Arroz, feijão, peixe e salada|🍛|Brasileiro|PF com peixe grelhado|530
Arroz, feijão, bisteca e salada|🍛|Brasileiro|PF com bisteca suína|640
Arroz, feijão, farofa, bife e salada|🍛|Brasileiro|PF completo com farofa|700
Arroz, feijão, farofa, frango e salada|🍛|Brasileiro|PF completo com farofa|640
Arroz, feijão, couve e ovo|🥬|Brasileiro|Prato simples com couve refogada|450
Arroz, feijão, mandioca e carne|🍲|Brasileiro|Carne cozida com mandioca|700
Arroz, feijão, purê e carne moída|🍲|Brasileiro|Prato caseiro com purê|680
Arroz, feijão, purê e frango|🍲|Brasileiro|Prato caseiro com purê|620
Arroz, feijão, batata e bife|🥔|Brasileiro|Batata cozida e bife|650
Arroz, feijão, batata-doce e frango|🍠|Brasileiro|Frango com batata-doce|590
Arroz, feijão, abóbora e carne|🎃|Brasileiro|Carne cozida com abóbora|610
Feijoada com arroz e couve|🥘|Brasileiro|Porção média com arroz e couve|790
Feijoada completa com farofa|🥘|Brasileiro|Arroz, couve, farofa e laranja|930
Baião de dois|🍲|Brasileiro|Arroz, feijão, queijo e temperos|620
Baião de dois com carne seca|🍲|Brasileiro|Baião com carne seca|760
Arroz carreteiro|🍲|Brasileiro|Arroz com carne bovina|650
Galinhada|🍗|Brasileiro|Arroz com frango e temperos|620
Galinhada com pequi|🍗|Brasileiro|Arroz, frango e pequi|660
Escondidinho de carne seca|🥘|Brasileiro|Purê de mandioca com carne seca|720
Escondidinho de carne moída|🥘|Brasileiro|Purê com carne moída|680
Escondidinho de frango|🥘|Brasileiro|Purê com frango desfiado|620
Vaca atolada|🍲|Brasileiro|Costela bovina com mandioca|780
Picadinho de carne com arroz e feijão|🍲|Brasileiro|Carne em cubos e acompanhamento|670
Carne seca com abóbora, arroz e feijão|🍲|Brasileiro|Carne seca com abóbora|690
Rabada com arroz e agrião|🍲|Brasileiro|Rabada cozida com acompanhamento|820
Dobradinha com arroz|🍲|Brasileiro|Dobradinha ao molho com arroz|730
Virado à paulista|🍛|Brasileiro|Arroz, tutu, bisteca, ovo e couve|980
Tutu de feijão, arroz e bisteca|🍛|Brasileiro|Tutu, arroz e bisteca|850
Cuscuz nordestino com 2 ovos|🌽|Brasileiro|Cuscuz de milho e ovos|430
Cuscuz nordestino com frango|🌽|Brasileiro|Cuscuz com frango desfiado|460
Cuscuz nordestino com carne seca|🌽|Brasileiro|Cuscuz com carne seca|520
Tapioca com ovo e queijo|🫓|Brasileiro|Tapioca recheada|390
Tapioca com frango|🫓|Brasileiro|Tapioca com frango desfiado|360
Tapioca com carne seca|🫓|Brasileiro|Tapioca com carne seca|420
Strogonoff de carne com arroz|🍛|Brasileiro|Carne ao molho cremoso e arroz|690
Strogonoff de carne com arroz e batata palha|🍛|Brasileiro|Prato completo|790
Strogonoff de frango com arroz|🍛|Brasileiro|Frango ao molho cremoso e arroz|650
Strogonoff de frango com arroz e batata palha|🍛|Brasileiro|Prato completo|750
Arroz de forno com frango|🍲|Brasileiro|Arroz assado com frango e legumes|620
Arroz de forno com carne|🍲|Brasileiro|Arroz assado com carne|670
Salpicão de frango com arroz|🥗|Brasileiro|Salpicão e arroz|610
Frango com quiabo e arroz|🍗|Brasileiro|Frango ensopado com quiabo|620
Arroz, feijão e omelete 2 ovos|🍳|Ovos|Omelete simples|450
Arroz, feijão e omelete 3 ovos|🍳|Ovos|Mais proteína e saciedade|530
Omelete 2 ovos e salada|🍳|Ovos|Omelete simples com salada|280
Omelete 3 ovos e salada|🍳|Ovos|Omelete com salada fresca|350
Omelete de queijo e salada|🍳|Ovos|3 ovos com queijo|430
Omelete de frango|🍳|Ovos|3 ovos com frango desfiado|450
Omelete de carne moída|🍳|Ovos|3 ovos com carne moída|480
Omelete de legumes|🍳|Ovos|3 ovos com legumes|360
Omelete, arroz e salada|🍳|Ovos|Omelete 3 ovos com arroz|470
Omelete, arroz, feijão e salada|🍳|Ovos|Prato completo|540
Arroz, feijão e ovos mexidos|🍳|Ovos|2 ovos mexidos|460
Ovos mexidos com pão|🍳|Ovos|2 ovos e pão francês|350
2 ovos cozidos com batata-doce e salada|🥚|Ovos|Refeição leve e saciante|390
2 ovos fritos com arroz e salada|🍳|Ovos|Ovos com pouco óleo|460
Arroz, feijão e bife|🥩|Carnes|Bife bovino grelhado|580
Arroz, feijão e bife acebolado|🥩|Carnes|Bife com cebola|610
Arroz, feijão e patinho grelhado|🥩|Carnes|Patinho grelhado|550
Arroz, feijão e alcatra|🥩|Carnes|Alcatra grelhada|620
Arroz, feijão e contrafilé|🥩|Carnes|Contrafilé grelhado|650
Arroz, feijão e maminha|🥩|Carnes|Maminha grelhada|630
Arroz, feijão e fraldinha|🥩|Carnes|Fraldinha grelhada|640
Arroz, feijão e picanha|🥩|Carnes|Picanha grelhada|720
Arroz, feijão e acém|🥩|Carnes|Acém cozido ou grelhado|590
Arroz, feijão e coxão mole|🥩|Carnes|Coxão mole grelhado|590
Arroz, feijão e coxão duro|🥩|Carnes|Coxão duro cozido|600
Arroz, feijão e cupim|🥩|Carnes|Cupim assado|760
Arroz, feijão e carne moída|🥩|Carnes|Carne moída refogada|560
Arroz, feijão e músculo moído|🥩|Carnes|Músculo moído com temperos|550
Arroz, feijão e carne de panela|🍲|Carnes|Carne cozida com molho caseiro|590
Arroz, feijão e músculo cozido|🍲|Carnes|Músculo cozido lentamente|590
Arroz, feijão e fígado acebolado|🥩|Carnes|Fígado bovino com cebola|550
Arroz, feijão e almôndegas|🍲|Carnes|Almôndegas ao molho|620
Arroz, feijão e hambúrguer caseiro|🥩|Carnes|Hambúrguer bovino caseiro|610
Carne, batata-doce e salada|🥩|Carnes|Carne bovina com batata-doce|550
Carne grelhada, arroz e salada|🥩|Carnes|Carne bovina grelhada|560
Carne moída, arroz e salada|🥩|Carnes|Carne moída refogada|540
Carne de panela, arroz e salada|🍲|Carnes|Carne cozida e salada|580
Bife à parmegiana com arroz|🥩|Carnes|Bife empanado, molho e queijo|780
Bife à parmegiana com arroz e fritas|🥩|Carnes|Prato completo|980
Arroz, feijão e costela bovina|🍖|Carnes|Costela bovina assada|780
Arroz, feijão e costela suína|🍖|Carnes|Costela suína assada|690
Arroz, feijão e bisteca suína|🍖|Carnes|Bisteca grelhada|620
Arroz, feijão e lombo suíno|🍖|Carnes|Lombo assado ou grelhado|590
Arroz, feijão e pernil suíno|🍖|Carnes|Pernil assado|650
Arroz, feijão e linguiça|🌭|Carnes|Linguiça grelhada|650
Arroz, feijão e calabresa acebolada|🌭|Carnes|Calabresa com cebola|670
Lombo suíno, arroz e salada|🍖|Carnes|Lombo com acompanhamento|560
Bisteca suína, arroz e salada|🍖|Carnes|Bisteca grelhada|590
Costela suína, arroz e salada|🍖|Carnes|Costela assada|690
Arroz, feijão e frango grelhado|🍗|Frango|Peito de frango grelhado|520
Arroz, feijão e frango em cubos|🍗|Frango|Frango em cubos refogado|540
Arroz, feijão e frango desfiado|🍗|Frango|Frango desfiado temperado|510
Arroz, feijão e coxa de frango assada|🍗|Frango|Coxa assada sem excesso de óleo|590
Arroz, feijão e sobrecoxa assada|🍗|Frango|Sobrecoxa assada|620
Arroz, feijão e coxa/sobrecoxa|🍗|Frango|Frango assado|610
Arroz, feijão e filé de frango acebolado|🍗|Frango|Filé com cebola|540
Arroz, feijão e frango ensopado|🍗|Frango|Frango cozido com molho|560
Arroz, feijão e frango ao molho|🍗|Frango|Frango ao molho caseiro|570
Frango, batata-doce e salada|🍗|Frango|Refeição simples e saciante|490
Frango, arroz e salada|🍗|Frango|Peito grelhado e acompanhamento|490
Frango em cubos, arroz e salada|🍗|Frango|Frango refogado|510
Frango desfiado, arroz e salada|🍗|Frango|Frango desfiado|480
Frango assado, batata e salada|🍗|Frango|Frango e batata assada|590
Frango à parmegiana com arroz|🍗|Frango|Frango empanado, molho e queijo|720
Frango à parmegiana com arroz e fritas|🍗|Frango|Prato completo|920
Fricassê de frango com arroz|🍗|Frango|Frango cremoso com arroz|720
Fricassê de frango com arroz e batata palha|🍗|Frango|Prato completo|820
Frango xadrez com arroz|🍗|Frango|Frango, legumes e arroz|610
Frango ao curry com arroz|🍗|Frango|Frango com curry e arroz|630
Galeto assado com arroz e salada|🍗|Frango|Meio galeto e acompanhamento|680
Espetinho de frango com arroz e salada|🍢|Frango|Espetinho grelhado|560
Coração de frango, arroz e salada|🍢|Frango|Corações grelhados|650
Macarrão com carne moída|🍝|Massas|Molho de tomate natural e carne moída|680
Macarrão com frango em cubos|🍝|Massas|Frango em cubos e molho caseiro|640
Macarrão com frango desfiado|🍝|Massas|Frango desfiado e molho|620
Macarrão alho e óleo|🍝|Massas|Porção tradicional|540
Macarrão ao sugo|🍝|Massas|Molho de tomate caseiro|500
Macarrão à bolonhesa|🍝|Massas|Molho bolonhesa|680
Macarrão com almôndegas|🍝|Massas|Molho vermelho e almôndegas|720
Macarrão com calabresa|🍝|Massas|Calabresa e molho de tomate|690
Macarrão com atum|🍝|Massas|Atum e molho caseiro|610
Macarrão com sardinha|🍝|Massas|Sardinha e molho de tomate|620
Macarrão com camarão|🦐|Massas|Massa, molho e camarões|680
Macarrão com molho branco e frango|🍝|Massas|Molho branco e frango|760
Macarrão com queijo|🧀|Massas|Massa com queijo|650
Macarrão com ovos|🍝|Massas|Macarrão com 2 ovos|560
Macarrão de forno com carne moída|🍝|Massas|Massa gratinada com carne|760
Macarrão de forno com frango|🍝|Massas|Massa gratinada com frango|720
Lasanha à bolonhesa|🧀|Massas|Porção média|650
Lasanha de frango|🧀|Massas|Frango, molho e queijo|620
Lasanha de presunto e queijo|🧀|Massas|Porção média|680
Nhoque à bolonhesa|🍝|Massas|Nhoque com molho de carne|700
Nhoque ao sugo|🍝|Massas|Nhoque com molho de tomate|590
Panqueca de carne moída|🥞|Massas|2 panquecas recheadas|620
Panqueca de frango|🥞|Massas|2 panquecas recheadas|580
Canelone de carne|🍝|Massas|Canelone recheado e gratinado|690
Canelone de frango|🍝|Massas|Canelone recheado e gratinado|650
Arroz, feijão e tilápia|🐟|Peixes|Filé de tilápia grelhado|500
Arroz, feijão e tilápia frita|🐟|Peixes|Tilápia frita|610
Peixe grelhado, arroz e salada|🐟|Peixes|Peixe branco grelhado|480
Peixe frito, arroz e salada|🐟|Peixes|Peixe frito|620
Salmão, arroz e salada|🐟|Peixes|Salmão grelhado|610
Sardinha, arroz e feijão|🐟|Peixes|Sardinha com prato brasileiro|560
Atum grelhado, arroz e salada|🐟|Peixes|Atum fresco grelhado|530
Pescada, arroz e salada|🐟|Peixes|Pescada grelhada|490
Merluza, arroz e salada|🐟|Peixes|Merluza grelhada|490
Corvina assada, arroz e salada|🐟|Peixes|Corvina assada|520
Cação ensopado com arroz|🐟|Peixes|Cação ao molho|570
Peixe assado, batata e salada|🐟|Peixes|Peixe assado com batata|530
Peixe empanado com arroz e salada|🐟|Peixes|Filé empanado|650
Peixe à parmegiana com arroz|🐟|Peixes|Peixe empanado, molho e queijo|720
Moqueca de peixe com arroz|🥘|Peixes|Moqueca tradicional|720
Moqueca de peixe com arroz e farofa|🥘|Peixes|Moqueca com acompanhamentos|830
Ensopado de peixe com arroz|🍲|Peixes|Peixe cozido ao molho|590
Bacalhau com batatas e arroz|🐟|Peixes|Bacalhau assado com batatas|760
Sardinha assada, arroz e salada|🐟|Peixes|Sardinha assada|520
Camarão, arroz e salada|🦐|Frutos do mar|Camarões salteados|540
Camarão alho e óleo com arroz|🦐|Frutos do mar|Camarões salteados e arroz|620
Camarão ao molho com arroz|🦐|Frutos do mar|Camarão ao molho caseiro|610
Camarão empanado com arroz e salada|🦐|Frutos do mar|Camarão empanado|720
Strogonoff de camarão com arroz|🦐|Frutos do mar|Camarão ao molho cremoso|690
Risoto de camarão|🦐|Frutos do mar|Porção média de risoto|720
Bobó de camarão com arroz|🦐|Frutos do mar|Bobó com arroz branco|820
Moqueca de camarão com arroz|🥘|Frutos do mar|Moqueca tradicional|780
Escondidinho de camarão|🦐|Frutos do mar|Purê com camarão|700
Lula, arroz e salada|🦑|Frutos do mar|Lula grelhada|520
Lula à dorê com arroz e salada|🦑|Frutos do mar|Lula empanada|690
Polvo grelhado com arroz e salada|🐙|Frutos do mar|Polvo grelhado|560
Frutos do mar com arroz|🦐|Frutos do mar|Mix de frutos do mar|620
Arroz de frutos do mar|🦐|Frutos do mar|Arroz temperado com frutos do mar|690
Caldeirada de frutos do mar com arroz|🥘|Frutos do mar|Caldeirada e arroz|760
Casquinha de siri|🦀|Frutos do mar|Porção individual|320
Siri ensopado com arroz|🦀|Frutos do mar|Siri ao molho com arroz|610
Churrasco com salada|🔥|Churrasco|Seleção de carnes e salada|660
Churrasco, arroz e salada|🔥|Churrasco|Carnes, arroz e salada|810
Churrasco, arroz, feijão e salada|🔥|Churrasco|Prato completo de churrasco|900
Churrasco, pão e salada|🔥|Churrasco|Carnes, pão e salada|850
Picanha, arroz, farofa e vinagrete|🔥|Churrasco|Picanha no churrasco|890
Alcatra, arroz, farofa e vinagrete|🔥|Churrasco|Alcatra no churrasco|820
Fraldinha, arroz, farofa e vinagrete|🔥|Churrasco|Fraldinha no churrasco|830
Maminha, arroz, farofa e vinagrete|🔥|Churrasco|Maminha no churrasco|810
Costela bovina, arroz e vinagrete|🔥|Churrasco|Costela bovina assada|880
Cupim, arroz e vinagrete|🔥|Churrasco|Cupim assado|900
Linguiça, arroz, farofa e vinagrete|🔥|Churrasco|Linguiça no churrasco|820
Coração de frango, arroz e vinagrete|🔥|Churrasco|Corações grelhados|730
Frango no churrasco com arroz e salada|🔥|Churrasco|Frango grelhado na brasa|670
Costela suína, arroz e vinagrete|🔥|Churrasco|Costela suína na brasa|780
Espetinho misto com arroz e vinagrete|🔥|Churrasco|Carne, frango e linguiça|720
Churrasco com pão de alho|🔥|Churrasco|Carnes e pão de alho|880
Churrasco com farofa e vinagrete|🔥|Churrasco|Carnes sem arroz|730
""";
    for (String line : data.split("\\R")) {
      line = line.trim();
      if (line.isEmpty()) continue;
      String[] v = line.split("\\|", -1);
      if (v.length != 5) continue;
      add(v[0], v[1], v[2], v[3], Integer.parseInt(v[4]));
    }
  }
}
