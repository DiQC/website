/* =========================================
   Solmant - Main JavaScript
   ========================================= */

// ── Language System ──────────────────────
const translations = {
  ca: {
    // Navbar
    nav_services:   'Serveis',
    nav_about:      'Nosaltres',
    nav_how:        'Com treballem',
    nav_blog:       'Blog',
    nav_contact:    'Contacte',
    nav_quote:      'Demana pressupost',
    nav_residential:'Solar Residencial',
    nav_commercial: 'Solar Comercial',
    nav_maintenance:'Manteniment',
    nav_cleaning:   'Neteja de Plaques',
    nav_monitoring: 'Monitoratge',
    nav_aboutus:    'Qui som',
    nav_faq:        'Preguntes Freqüents',

    // Hero
    hero_tag:       '☀️ Serveis Solars a Catalunya',
    hero_tag2:      '🧹 Neteja professional de panells solars',
    hero_title:     'Recupera el <em>màxim rendiment</em> dels teus panells solars',
    hero_desc:      'Servei professional de neteja i manteniment de plaques solars per a llars i empreses a Catalunya',
    hero_quote:     'Demana pressupost',
    hero_how:       'Com treballem',
    hero_stat1_num: '500+',
    hero_stat1_lbl: 'Instal·lacions',
    hero_stat2_num: '98%',
    hero_stat2_lbl: 'Satisfacció',
    hero_stat3_num: '10+',
    hero_stat3_lbl: 'Anys d\'experiència',
    hero_card1:     '🌱 0 emissions',
    hero_card2:     '💰 Estalvi garantit',
    hero_card3:     '⚡ Màxima eficiència',

    // Trust bar
    trust1: 'Certificació IDAE',
    trust2: 'Assegurança RC 5M€',
    trust3: 'Tècnics certificats',
    trust4: 'Garantia 25 anys panells',
    trust5: 'Informe post-servei',

    // About
    about_label:   'Qui som',
    about_title:   'Neteja professional de plaques solars: recupera fins a un 30% d\'eficiència',
    about_desc1:   'A Solmant ens especialitzem en la neteja i manteniment de plaques solars. Panells nets rendeixen fins a un 30% més, reduint directament la teva factura elèctrica.',
    about_desc2:   'Treballem amb tècniques i equips professionals adaptats a cada instal·lació, sense productes químics i sense risc per als teus panells.',
    about_f1_title:'Neteja amb Aigua Descalcificada',
    about_f1_desc: 'Usem aigua descalcificada, sense productes químics. Zero residus, zero ratllades.',
    about_f2_title:'Instal·lació Certificada',
    about_f2_desc: 'Tots els tècnics estan acreditats per la Generalitat de Catalunya.',
    about_f3_title:'Revisió Anual del Estat',
    about_f3_desc: 'Inspecció anual completa per assegurar el perfecte funcionament de la teva instal·lació solar.',
    about_btn:     'Coneix-nos millor',

    // Services
    srv_label:   'Serveis',
    srv_title:   'Tot el que necessites per al teu sistema solar',
    srv_desc:    'Oferim una gama completa de serveis, des de la primera instal·lació fins al manteniment preventiu i la neteja professional.',
    srv1_title:  'Instal·lació Residencial',
    srv1_desc:   'Creem instal·lacions solars a mida per a cases i xalets, pensades per maximitzar l\'estalvi, l\'eficiència i la integració estètica a la teva llar.',
    srv1_link:   'Saber més →',
    srv2_title:  'Instal·lació Comercial',
    srv2_desc:   'Implementem solucions solars per a empreses, naus i comunitats, orientades a reduir la despesa energètica i millorar la rendibilitat de cada projecte.',
    srv2_link:   'Saber més →',
    srv3_title:  'Neteja Professional',
    srv3_desc:   'Eliminem brutícia, pol·len i dipòsits amb sistemes de neteja especialitzats que ajuden a recuperar l\'eficiència i protegir el rendiment de la instal·lació.',
    srv3_link:   'Saber més →',
    srv4_title:  'Manteniment Preventiu',
    srv4_desc:   'Supervisem periòdicament la instal·lació per anticipar incidències, allargar la vida útil del sistema i garantir-ne un funcionament òptim.',
    srv4_link:   'Saber més →',
    srv5_title:  'Estudi de la teva instal·lació',
    srv5_desc:   'Analitzem l\'estat i el comportament de la teva instal·lació solar per identificar pèrdues de rendiment i proposar millores eficients i útils.',
    srv5_link:   'Saber més →',
    srv6_title:  'Assessoria i Subvencions',
    srv6_desc:   'T\'ajudem a aprofitar les ajudes disponibles i a simplificar tots els tràmits perquè la teva inversió solar sigui més fàcil, clara i rendible.',
    srv6_link:   'Saber més →',
    srv6_img:    'images/factura_catala.jpg',

    // Instal·lació Residencial – detail page
    res_hero_sub:       'Energia solar a mida per a casa teva',
    res_p1:             'A Solmant dissenyem instal·lacions solars residencials pensades per adaptar-se a les necessitats reals de cada llar. No totes les cases consumeixen igual, ni totes les cobertes ofereixen les mateixes condicions, per això estudiem cada cas de manera personalitzada per proposar una solució eficient, segura i rendible.',
    res_feat_label:     'Per què Solmant',
    res_feat1:          'Disseny personalitzat per a cada habitatge',
    res_feat2:          'Estudi energètic previ sense cost',
    res_feat3:          'Instal·lació segura i certificada',
    res_feat4:          'Assessorament en subvencions disponibles',
    res_analysis_label: 'Anàlisi prèvia',
    res_analysis_title: 'Què analitzem abans d\'instal·lar',
    res_analysis_intro: 'Abans de començar, valorem els factors que influeixen directament en el rendiment de la instal·lació.',
    res_chk1:           'Orientació i inclinació de la coberta',
    res_chk2:           'Espai disponible a la coberta',
    res_chk3:           'Possibles ombres o obstacles',
    res_chk4:           'Consum energètic de l\'habitatge',
    res_chk5:           'Objectius d\'estalvi i amortització',
    res_analysis_end:   'Aquesta anàlisi prèvia ens permet definir una instal·lació equilibrada, ben dimensionada i preparada per oferir el màxim rendiment possible des del primer dia.',
    res_efficient_title:'Instal·lacions eficients, segures i ben integrades',
    res_efficient_desc: 'El nostre objectiu no és només instal·lar plaques solars, sinó integrar una solució que funcioni bé, que sigui duradora i que encaixi estèticament amb la teva llar. Treballem perquè el sistema ofereixi un alt nivell d\'eficiència, una execució acurada i una integració visual neta i professional.',
    res_why_title:      'Per què apostar per l\'energia solar residencial',
    res_why_desc:       'Instal·lar panells solars a casa és una manera intel·ligent de reduir la dependència de la xarxa elèctrica i controlar millor la despesa energètica. A més de l\'estalvi a mig i llarg termini, una bona instal·lació pot augmentar el valor de l\'habitatge i millorar-ne l\'eficiència energètica.',
    res_process_label:  'Com treballem',
    res_process_title:  'El nostre procés',
    res_process_desc:   'T\'acompanyem durant tot el procés, des del primer estudi fins a la posada en marxa de la instal·lació. Volem que tinguis claredat, confiança i la tranquil·litat de saber que cada decisió es pren pensant en el rendiment i la viabilitat real del projecte.',
    res_smart_title:    'Pensat per a qui busca una solució clara i rendible',
    res_smart_desc:     'Tant si estàs valorant fer el pas cap a l\'autoconsum com si ja tens clar que vols instal·lar plaques solars, t\'ajudem a trobar la millor opció per a casa teva amb un enfocament pràctic, honest i professional.',
    res_cta_title:      'Vols saber quina instal·lació s\'adapta millor a casa teva?',
    res_cta_desc:       'Estudiarem el teu cas i et proposarem una solució solar pensada per maximitzar l\'estalvi, l\'eficiència i la rendibilitat.',
    res_cta_btn:        'Demana pressupost gratuït',


    // Instal·lació Comercial – detail page
    com_hero_sub:        'Solucions solars per a empreses, naus i comunitats',
    com_p1:              'A Solmant desenvolupem instal·lacions solars comercials pensades per reduir la despesa energètica i millorar la rendibilitat de cada projecte. Treballem amb empreses, naus industrials, negocis i comunitats que volen aprofitar millor l\'energia, controlar costos i avançar cap a un model més eficient i sostenible.',
    com_feat_label:      'Per a qui és',
    com_feat1:           'Empreses i naus industrials amb consum elevat',
    com_feat2:           'Negocis amb activitat diürna continuada',
    com_feat3:           'Comunitats de propietaris amb zones comunes',
    com_feat4:           'Projectes orientats a retorn de la inversió',
    com_analysis_label:  'Anàlisi inicial',
    com_analysis_title:  'Un estudi adaptat a cada activitat',
    com_analysis_intro:  'Cada empresa té unes necessitats energètiques diferents. Analitzem els factors clau per definir la millor solució possible.',
    com_chk1:            'Tipus de consum i horaris d\'activitat',
    com_chk2:            'Superfície disponible i condicions de coberta',
    com_chk3:            'Retorn de la inversió i període d\'amortització',
    com_chk4:            'Compatibilitat tècnica i normativa aplicable',
    com_chk5:            'Objectius d\'estalvi i eficiència energètica',
    com_analysis_end:    'Aquest estudi inicial ens permet definir una solució ben dimensionada, orientada a obtenir el màxim rendiment i un retorn coherent de la inversió.',
    com_cost_title:      'Reducció de costos i millora de l\'eficiència',
    com_cost_desc:       'Una instal·lació solar comercial ben planificada pot reduir de manera significativa la dependència de la xarxa elèctrica i ajudar a estabilitzar la despesa energètica. Això és especialment rellevant en activitats amb consums elevats o continus, on una bona optimització pot tenir un impacte directe en els costos operatius.',
    com_durable_title:   'Projectes pensats per durar',
    com_durable_desc:    'Més enllà de la instal·lació, busquem que cada projecte sigui sòlid, segur i preparat per oferir resultats a llarg termini. Treballem amb una visió pràctica i professional perquè el sistema sigui fiable, eficient i fàcil de mantenir, sempre adaptat a la realitat de l\'activitat i de l\'espai disponible.',
    com_future_label:    'Visió de futur',
    com_future_title:    'Una solució clara per a negocis que volen avançar',
    com_future_desc:     'L\'energia solar és una oportunitat per millorar l\'eficiència del negoci, reduir la vulnerabilitat davant l\'augment dels preus de l\'energia i reforçar una imatge empresarial més responsable i preparada per al futur. Tant en petits negocis com en instal·lacions de més escala, plantegem cada projecte amb criteri tècnic i enfocament realista.',
    com_process_title:   'Acompanyament durant tot el procés',
    com_process_desc:    'T\'acompanyem des de la fase d\'estudi fins a la definició de la millor proposta per a la teva empresa o comunitat. El nostre objectiu és oferir-te una solució entenedora, ben plantejada i alineada amb els teus objectius de consum, estalvi i rendibilitat.',
    com_cta_title:       'Vols valorar una instal·lació solar per al teu negoci o comunitat?',
    com_cta_desc:        'Estudiarem el teu cas i et proposarem una solució adaptada al consum, a l\'espai disponible i als objectius reals del projecte.',
    com_cta_btn:         'Demana pressupost gratuït',

    // Neteja Professional – detail page
    net_hero_sub:        'Recupera el rendiment real de la teva instal·lació',
    net_p1:              'Amb el pas del temps, els panells solars acumulen pols, pol·len, brutícia ambiental, residus orgànics i altres dipòsits que poden afectar-ne el rendiment. Encara que sovint no es percebi a simple vista, aquesta acumulació pot reduir l\'eficiència de la instal·lació i fer que produeixi menys energia de la que hauria de generar.',
    net_feat_label:      'Com ho fem',
    net_feat1:           'Tècniques específiques per a panells solars',
    net_feat2:           'Sense productes químics agressius',
    net_feat3:           'Compatible amb tot tipus d\'instal·lació',
    net_feat4:           'Detecció visual d\'anomalies inclosa',
    net_why_label:       'Factors que afecten el rendiment',
    net_why_title:       'Per què és important una neteja adequada',
    net_why_intro:       'Quan els panells estan bruts, la captació solar es veu afectada. Aquests són els principals factors que ho acceleren.',
    net_chk1:            'Pols, pol·len i brutícia ambiental',
    net_chk2:            'Residus orgànics i dipòsits persistents',
    net_chk3:            'Excrements d\'ocells i partícules adherides',
    net_chk4:            'Zones amb poca pluja o molta contaminació',
    net_chk5:            'Pèrdua d\'eficiència silenciosa i progressiva',
    net_why_end:         'Una neteja ben feta ajuda a recuperar eficiència, millorar el comportament del sistema i mantenir-lo en condicions òptimes, especialment en zones amb pols, contaminació o poca pluja.',
    net_specific_title:  'Una neteja específica per a panells solars',
    net_specific_desc:   'A Solmant fem neteges professionals adaptades a aquest tipus d\'instal·lacions, utilitzant sistemes i tècniques pensades per eliminar la brutícia sense malmetre la superfície dels panells ni els seus components. No es tracta només de netejar, sinó de fer-ho correctament, amb criteri tècnic i amb cura per preservar l\'estat i la vida útil de la instal·lació.',
    net_safe_title:      'Neteja segura i orientada al manteniment',
    net_safe_desc:       'La neteja professional també és una manera de cuidar la instal·lació i detectar visualment possibles anomalies, acumulacions persistents o senyals de desgast. Per això la plantegem com una part clau del manteniment preventiu i de la conservació general del sistema.',
    net_adapt_label:     'Servei adaptat',
    net_adapt_title:     'Per a habitatges, empreses i instal·lacions de totes les dimensions',
    net_adapt_desc:      'Adaptem el servei tant a instal·lacions residencials com comercials, sempre amb un enfocament professional i amb l\'objectiu que la teva instal·lació funcioni millor, durant més temps i amb menys pèrdues de rendiment.',
    net_invest_title:    'Una inversió petita que pot marcar la diferència',
    net_invest_desc:     'Mantenir els panells nets no és només una qüestió estètica. És una manera pràctica de protegir la inversió feta, evitar pèrdues innecessàries i ajudar el sistema a treballar en les millors condicions possibles al llarg del temps.',
    net_cta_title:       'Vols recuperar l\'eficiència dels teus panells solars?',
    net_cta_desc:        'Valorem l\'estat de la instal·lació i t\'oferim una neteja professional pensada per protegir-ne el rendiment i la durabilitat.',
    net_cta_btn:         'Demana pressupost gratuït',

    // Manteniment Preventiu – detail page
    mnt_hero_sub:        'Protegir la instal·lació és protegir la teva inversió',
    mnt_p1:              'Una instal·lació solar està pensada per funcionar durant molts anys, però perquè mantingui un bon rendiment necessita revisions periòdiques. El manteniment preventiu permet comprovar l\'estat general del sistema, detectar possibles incidències abans que vagin a més i assegurar que cada element continua treballant en les millors condicions.',
    mnt_feat_label:      'Què inclou',
    mnt_feat1:           'Revisió periòdica planificada',
    mnt_feat2:           'Detecció precoç d\'incidències',
    mnt_feat3:           'Allarga la vida útil del sistema',
    mnt_feat4:           'Informe de l\'estat de la instal·lació',
    mnt_check_label:     'Revisió preventiva',
    mnt_check_title:     'Revisar avui per evitar problemes demà',
    mnt_check_intro:     'Moltes anomalies no es detecten fins que el rendiment ja ha baixat. Amb un manteniment adequat, es poden identificar a temps.',
    mnt_chk1:            'Estat general del sistema i components',
    mnt_chk2:            'Connexions i elements elèctrics',
    mnt_chk3:            'Brutícia persistent o acumulació irregular',
    mnt_chk4:            'Rendiment energètic i comportament del sistema',
    mnt_chk5:            'Seguretat i estabilitat de la instal·lació',
    mnt_check_end:       'Identificar senyals de desgast, connexions que cal revisar o altres factors a temps pot evitar que un problema petit es converteixi en una incidència major.',
    mnt_service_title:   'Un servei orientat al bon funcionament del sistema',
    mnt_service_desc:    'A Solmant entenem el manteniment com una part essencial de la vida útil de qualsevol instal·lació solar. No es tracta només de reaccionar quan hi ha una avaria, sinó d\'actuar abans perquè el sistema continuï sent eficient, estable i fiable amb el pas del temps.',
    mnt_peace_title:     'Més eficiència, més tranquil·litat',
    mnt_peace_desc:      'Fer revisions periòdiques ajuda a mantenir el rendiment energètic, reduir el risc d\'incidències i allargar la durabilitat del sistema. També ofereix una major tranquil·litat a l\'usuari, perquè permet tenir una visió més clara de l\'estat de la instal·lació i anticipar possibles necessitats.',
    mnt_adapt_label:     'Personalitzat',
    mnt_adapt_title:     'Adaptat a instal·lacions residencials i comercials',
    mnt_adapt_desc:      'Cada instal·lació té les seves característiques, i per això adaptem el manteniment al tipus de sistema, a l\'entorn i a l\'ús que se\'n fa. Tant en habitatges com en negocis o comunitats, l\'objectiu és el mateix: preservar el bon funcionament de la instal·lació i evitar pèrdues de rendiment innecessàries.',
    mnt_smart_title:     'Una manera intel·ligent d\'allargar la vida útil',
    mnt_smart_desc:      'El manteniment preventiu és una decisió pràctica per conservar millor la instal·lació, protegir la inversió i garantir que el sistema continuï donant el millor resultat possible any rere any. Amb una supervisió adequada, és més fàcil mantenir l\'eficiència i reduir imprevistos.',
    mnt_cta_title:       'Vols mantenir la teva instal·lació en les millors condicions?',
    mnt_cta_desc:        'T\'ajudem a revisar-ne l\'estat, prevenir incidències i assegurar un funcionament eficient, segur i durador.',
    mnt_cta_btn:         'Demana pressupost gratuït',


    // Estudi + Assessoria – detail pages (CA)
    est_hero_h1:         'Estudi de la teva instal·lació',
    est_hero_sub:        'Entendre la instal·lació per treure\'n el màxim rendiment',
    est_p1:              'A Solmant analitzem l\'estat i el comportament de la teva instal·lació solar per detectar possibles pèrdues d\'eficiència, punts de millora o incidències que poden estar afectant-ne el rendiment. Sovint, una instal·lació aparentment correcta no està produint tot el que podria, i un bon estudi permet entendre per què.',
    est_feat_label:      'Què inclou',
    est_feat1:           'Anàlisi detallada de la instal·lació',
    est_feat2:           'Detecció de pèrdues d\'eficiència',
    est_feat3:           'Recomanacions concretes de millora',
    est_feat4:           'Informe clar i orientat a l\'acció',
    est_check_label:     'Revisió global',
    est_check_title:     'Una revisió orientada a resultats reals',
    est_check_intro:     'No es tracta només de mirar els panells, sinó d\'avaluar la instal·lació amb una visió global. Revisem els factors que poden influir directament en la producció.',
    est_chk1:            'Estat general dels panells i components',
    est_chk2:            'Presència de brutícia o acumulació persistent',
    est_chk3:            'Possibles ombres en la coberta',
    est_chk4:            'Senyals de desgast o deteriorament',
    est_chk5:            'Factors que redueixen l\'eficiència del sistema',
    est_check_end:       'Aquesta avaluació global ens permet oferir-te una visió real de com funciona el sistema i quines accions concretes poden millorar-ne el rendiment.',
    est_detect_title:    'Detectar problemes abans que es facin més grans',
    est_detect_desc:     'Un estudi a temps pot ajudar a identificar anomalies que, si no es revisen, poden acabar traduint-se en menys producció, més pèrdues energètiques o una menor vida útil de la instal·lació. Per això aquest servei és especialment útil tant per a sistemes que fa temps que estan en funcionament com per a instal·lacions que no estan rendint com s\'esperava.',
    est_base_title:      'Una base clara per decidir millor',
    est_base_desc:       'Conèixer l\'estat real de la instal·lació és clau per saber si cal una neteja, una revisió més tècnica, un manteniment específic o simplement petites accions d\'optimització. Aquest estudi et dona una visió més clara del sistema i t\'ajuda a prendre decisions amb més criteri i més confiança.',
    est_adapt_label:     'Servei flexible',
    est_adapt_title:     'Per a habitatges, negocis i comunitats',
    est_adapt_desc:      'Adaptem aquest servei a diferents tipus d\'instal·lació, tant residencials com comercials. L\'objectiu és sempre el mateix: entendre com està funcionant el sistema, detectar què es pot millorar i ajudar-te a aprofitar millor la teva inversió solar.',
    est_control_title:   'Més informació, més control, més eficiència',
    est_control_desc:    'Quan coneixes millor la teva instal·lació, és més fàcil evitar pèrdues innecessàries i mantenir el sistema en condicions òptimes. A Solmant enfoquem aquest servei com una eina útil per recuperar control, guanyar tranquil·litat i assegurar que la instal·lació treballa al nivell que li correspon.',
    est_cta_title:       'Vols saber si la teva instal·lació està rendint com hauria?',
    est_cta_desc:        'A Solmant estudiem l\'estat del teu sistema solar per detectar problemes, evitar pèrdues d\'energia i ajudar-te a treure\'n el màxim profit.',
    est_cta_btn:         'Demana un estudi gratuït',
    ase_hero_h1:         'Assessoria i Subvencions',
    ase_hero_sub:        'T\'ajudem a entendre les opcions disponibles',
    ase_p1:              'A Solmant sabem que, a l\'hora de fer una instal·lació solar, no tot depèn només de la part tècnica. També és important conèixer quines ajudes, bonificacions o opcions administratives poden estar disponibles en cada moment. Per això oferim un servei d\'assessoria pensat per orientar-te amb claredat i ajudar-te a entendre millor el context de la teva inversió.',
    ase_feat_label:      'Què fem',
    ase_feat1:           'Orientació sobre ajudes i bonificacions vigents',
    ase_feat2:           'Suport en tràmits i documentació',
    ase_feat3:           'Visió clara del procés administratiu',
    ase_feat4:           'Tracte proper, explicació honesta i directa',
    ase_check_label:     'Aspectes que cobrim',
    ase_check_title:     'Menys dubtes, més claredat',
    ase_check_intro:     'Els tràmits i la informació sobre subvencions poden generar confusió. T\'ajudem a orientar-te en els aspectes més importants.',
    ase_chk1:            'Convocatòries i ajudes que poden estar vigents',
    ase_chk2:            'Documentació habitual que es pot requerir',
    ase_chk3:            'Passos habituals del procés administratiu',
    ase_chk4:            'Aspectes fiscals i bonificacions possibles',
    ase_chk5:            'Criteris de rendibilitat i retorn esperat',
    ase_check_end:       'El nostre objectiu és ajudar-te a identificar quines opcions poden aplicar al teu cas i donar-te una visió més clara del procés, perquè puguis prendre decisions amb més seguretat.',
    ase_process_title:   'Un acompanyament útil durant el procés',
    ase_process_desc:    'Aquest servei està pensat per facilitar-te el camí i reduir la sensació de complexitat que sovint acompanya aquest tipus de gestions. T\'orientem sobre els passos habituals, la documentació que es pot requerir i els aspectes que convé tenir en compte perquè el procés sigui més ordenat i entenedor.',
    ase_invest_title:    'Una inversió més ben plantejada',
    ase_invest_desc:     'Conèixer amb antelació les possibles ajudes o avantatges fiscals pot ajudar-te a valorar millor la rendibilitat de la instal·lació i a planificar-la amb més perspectiva. Més enllà de la subvenció en si, disposar d\'una bona orientació et permet afrontar el projecte amb més confiança i amb una visió més completa del cost real i del retorn esperat.',
    ase_adapt_label:     'Adaptat a cada cas',
    ase_adapt_title:     'Per a particulars, empreses i comunitats',
    ase_adapt_desc:      'Adaptem l\'assessoria segons el tipus de projecte i el perfil de cada client. Tant si es tracta d\'un habitatge com d\'un negoci o una comunitat, a Solmant volem que tinguis la informació necessària per avançar amb tranquil·litat i criteri.',
    ase_honest_title:    'Orientació clara, tracte proper',
    ase_honest_desc:     'A Solmant entenem que un bon servei també vol dir explicar bé les coses. Per això posem el focus en una assessoria pràctica, propera i honesta, pensada perquè entenguis les opcions disponibles sense complicacions innecessàries.',
    ase_cta_title:       'Vols saber quines ajudes o opcions poden aplicar al teu projecte?',
    ase_cta_desc:        'A Solmant t\'orientem perquè entenguis millor els tràmits, les possibles bonificacions i el context real de la teva inversió solar.',
    ase_cta_btn:         'Parla amb nosaltres',

    // How it works
    how_label:  'El nostre procés',
    how_title:  'Com treballem',
    how_desc:   'Un procés senzill i transparent des del primer contacte fins al servei postvenda.',
    step1_title:'Consulta gratuïta',
    step1_desc: 'Analitzem la teva llar i consum per dissenyar la millor solució.',
    step2_title:'Pressupost detallat',
    step2_desc: 'Informe escrit amb tots els detalls, sense lletra petita.',
    step3_title:'Instal·lació i neteja',
    step3_desc: 'Tècnics certificats realitzen el treball de forma neta i segura.',
    step4_title:'Informe i seguiment',
    step4_desc: 'Documentació completa i accés a l\'app de monitoratge.',

    // Calculator
    calc_label:      'Calculadora Solar',
    calc_title:      'Calcula el teu sistema solar ideal',
    calc_desc:       'Introdueix les mides de la teulada o la superfície disponible i et diem quantes plaques necessites i quant pots estalviar.',
    calc_tab1:       '🏠 Teulada',
    calc_tab2:       '🌿 Terra / Coberta plana',
    calc_length:     'Longitud (m)',
    calc_width:      'Amplada (m)',
    calc_area:       'Superfície total (m²)',
    calc_orientation:'Orientació',
    calc_orient_s:   'Sud ☀️',
    calc_orient_se:  'Sud-Est',
    calc_orient_sw:  'Sud-Oest',
    calc_orient_e:   'Est',
    calc_orient_w:   'Oest',
    calc_inclination:'Inclinació (graus)',
    calc_consumption:'Consum mensual (kWh)',
    calc_shadow:     'Zones d\'ombra',
    calc_shadow_no:  'Sense ombra',
    calc_shadow_some:'Ombra parcial',
    calc_shadow_yes: 'Ombra significativa',
    calc_btn:        '⚡ Calcular ara',
    calc_res_title:  '📊 Estimació per a la teva instal·lació',
    calc_res1_lbl:   'Plaques recomanades',
    calc_res2_lbl:   'kWp instal·lats',
    calc_res3_lbl:   'Estalvi anual estimat (€)',
    calc_res4_lbl:   'Superfície necessària (m²)',
    calc_res5_lbl:   'CO₂ evitat (kg/any)',
    calc_res6_lbl:   'Retorn inversió aprox.',
    calc_note:       '* Estimació orientativa. Sol·licita un estudi personalitzat gratuït.',
    calc_cta:        'Sol·licita estudi gratuït',

    // Why us
    why_label: 'Per què Solmant',
    why_title: 'Raons per confiar en nosaltres',
    why1_title:'Tècnics Certificats',
    why1_desc: 'Tot el personal té les acreditacions requerides per llei i formació contínua.',
    why2_title:'Garantia Real',
    why2_desc: 'Garantia de 25 anys en panells, 10 anys en inversors i 2 anys en mà d\'obra.',
    why3_title:'Sense Químics',
    why3_desc: 'La nostra neteja usa únicament aigua desionitzada. Respectuosa amb el medi ambient.',
    why4_title:'Informe Detallat',
    why4_desc: 'Cada servei inclou un informe fotogràfic complet i recomanacions personalitzades.',
    why5_title:'Preu Transparent',
    why5_desc: 'Pressupost tancat sense sorpreses. El preu acordat és el que pagues.',
    why6_title:'Cobertura Catalunya',
    why6_desc: 'Atenem tota Catalunya amb temps de resposta inferior a 48 hores.',

    // FAQ
    faq_label: 'FAQ',
    faq_title: 'Preguntes freqüents',
    faq1_q: 'Amb quina freqüència he de netejar les plaques solars?',
    faq1_a: 'Es recomana una neteja professional almenys una vegada a l\'any, idealment a la primavera. A zones amb molta pol·len, pol·lució o deposicions d\'ocells, potser dues vegades l\'any. Les plaques brutes poden perdre fins al 25-30% del seu rendiment.',
    faq2_q: 'Quant triga una instal·lació residencial?',
    faq2_a: 'Una instal·lació típica residencial (6-12 panells) es completa en 1-2 dies. Les instal·lacions comercials de major envergadura poden requerir de 3 a 5 dies hàbils.',
    faq3_q: 'Quines ajudes i subvencions hi ha disponibles a Catalunya?',
    faq3_a: 'A Catalunya existeix el programa PREE 5000 de l\'IDAE i les ajudes MOVES III per a autoconsum. A més, molts ajuntaments ofereixen bonificacions a l\'IBI de fins al 50% per als primers 5 anys. T\'assessorem en tot el tràmit sense cost addicional.',
    faq4_q: 'Es pot instal·lar en una comunitat de veïns?',
    faq4_a: 'Sí, les comunitats de propietaris es beneficien enormement de les instal·lacions solars compartides. Calen 3/5 parts dels vots en junta. T\'acompanyem en tot el procés administratiu i legal.',
    faq5_q: 'Quin manteniment requereix un sistema solar?',
    faq5_a: 'Un sistema solar ben instal·lat requereix molt poc manteniment. Recomanem: una neteja professional anual, una revisió tècnica cada 2 anys i el monitoratge continu via app. Els inversors solen tenir una vida útil de 10-15 anys.',
    faq6_q: 'Com funciona el sistema de monitoratge?',
    faq6_a: 'Instal·lem un datalogger connectat a internet que envia dades en temps real a la nostra plataforma i a la teva app mòbil. Reps alertes si el rendiment baixa per sota del normal i informes mensuals automàtics.',

    // Blog
    blog_label:     'Blog',
    blog_title:     'Consells i novetats solar',
    blog_page_desc: 'Articles sobre neteja, manteniment, subvencions i tecnologia fotovoltaica a Catalunya.',
    blog_all:       'Veure tots els articles',
    blog1_tag:   'Manteniment',
    blog1_title: 'Per què netejar les plaques cada any: l\'impacte real en el rendiment',
    blog1_desc:  'La brutícia, el pol·len i els dipòsits poden reduir la producció solar i afectar el rendiment de la instal·lació. T\'expliquem quan convé netejar, què cal evitar i per què el manteniment marca la diferència.',
    blog2_tag:   'Subvencions',
    blog2_title: 'Ajudes solars a Catalunya el 2026: què continua vigent i què ja ha tancat',
    blog2_desc:  'Repassem l\'estat real de les ajudes: què ha finalitzat, quines bonificacions fiscals municipals poden continuar disponibles i on consultar la informació oficial abans d\'instal·lar.',
    blog3_tag:   'Tecnologia',
    blog3_title: 'Tecnologia solar el 2026: millores que ja estan marcant la diferència',
    blog3_desc:  'Mòduls més eficients, més presència de tecnologia bifacial i noves solucions per minimitzar l\'efecte de la brutícia: t\'expliquem quines innovacions estan millorant les instal·lacions solars actuals.',
    blog_date1:  '12 mar 2025',
    blog_date2:  '28 feb 2025',
    blog_date3:  '14 feb 2025',

    // Contact
    contact_label:    'Contacte',
    contact_title:    'Parlem del teu projecte solar',
    contact_desc:     'Ompliu el formulari i us contactarem en menys de 24 hores amb un pressupost personalitzat i sense compromís.',
    contact_phone:    '+34 93 XXX XX XX',
    contact_email:    'hola@solmant.cat',
    contact_address:  'Igualada, Catalunya',
    contact_hours:    'Dl-Dv: 8h – 19h',
    form_title:       'Sol·licita pressupost gratuït',
    form_name:        'Nom complet',
    form_phone:       'Telèfon',
    form_email:       'Correu electrònic',
    form_service:     'Servei d\'interès',
    form_srv_inst:    'Instal·lació',
    form_srv_clean:   'Neteja',
    form_srv_maint:   'Manteniment',
    form_srv_amp:     'Ampliació',
    form_srv_rep:     'Reparació',
    form_srv_other:   'Altres',
    form_message:     'Explica\'ns el teu cas',
    form_submit:      '📩 Enviar sol·licitud',
    form_ok_title:    '¡Missatge rebut!',
    form_ok_desc:     'Us contactarem en menys de 24 hores. Gràcies per confiar en Solmant.',

    // Footer
    footer_desc:     'Especialistes en neteja i manteniment de plaques solars a Catalunya.',
    footer_nav:      'Navegació',
    footer_services: 'Serveis',
    footer_contact:  'Contacte',
    footer_newsletter_title: 'Butlletí',
    footer_newsletter_placeholder: 'El teu email',
    footer_newsletter_btn: 'Subscriure\'m',
    footer_copy:    '© 2026 Solmant. Tots els drets reservats.',
    footer_privacy: 'Política de privacitat',
    footer_terms:   'Avís legal',
    footer_cookies: 'Cookies',

    // Jobs page
    back_btn: '← Tornar a l\'inici',

    // Jobs
    jobs_nav:            'Treballa amb nosaltres',
    jobs_label:          'Uneix-te a l\'equip',
    jobs_title:          'Treballa amb nosaltres',
    jobs_intro:          'A Solmant busquem persones responsables, compromeses i amb ganes de treballar en el sector de la neteja i manteniment de plaques solars per a particulars i empreses.',
    jobs_seek_title:     'Què busquem',
    jobs_seek_desc:      'Perfils per a tasques de neteja tècnica, revisió visual, manteniment preventiu i suport en treballs sobre cobertes i instal·lacions solars.',
    jobs_req_title:      'Requisits essencials per al lloc',
    jobs_req1:           'Responsabilitat, serietat i bona actitud',
    jobs_req2:           'Capacitat per treballar en equip',
    jobs_req3:           'Compromís amb la seguretat i la feina ben feta',
    jobs_req4:           'Bona condició física per a tasques operatives',
    jobs_req5:           'Disponibilitat per desplaçar-se a instal·lacions de clients',
    jobs_req6:           'Permís de conduir B',
    jobs_req7:           'No tenir limitacions per fer treballs en alçada, quan el lloc ho requereixi',
    jobs_val_title:      'Es valorarà especialment',
    jobs_val1:           'Experiència en neteja de plaques solars',
    jobs_val2:           'Experiència en manteniment preventiu o feines similars',
    jobs_val3:           'Experiència en cobertes, treballs en alçada o entorns tècnics',
    jobs_val4:           'Tracte professional amb clients particulars i empreses',
    jobs_val5:           'Capacitat per detectar incidències bàsiques i comunicar correctament l\'estat de la instal·lació',
    jobs_training_title: 'Títols, cursos i formació que es valoraran',
    jobs_training1:      'Formació en treballs en alçada',
    jobs_training2:      'Formació en PRL / Prevenció de Riscos Laborals',
    jobs_training3:      'Formació en risc elèctric',
    jobs_training4:      'Formació en plataformes elevadores (PEMP)',
    jobs_training5:      'Formació o experiència en instal·lacions solars fotovoltaiques',
    jobs_training6:      'Certificat professional de muntatge i manteniment d\'instal·lacions solars fotovoltaiques',
    jobs_training7:      'FP d\'Instal·lacions Elèctriques i Automàtiques',
    jobs_training8:      'FP d\'Energies Renovables',
    jobs_training9:      'Coneixements d\'electricitat, manteniment o instal·lacions tècniques',
    jobs_offer_title:    'Què oferim',
    jobs_offer1:         'Incorporació a un sector amb gran projecció',
    jobs_offer2:         'Formació i aprenentatge continu',
    jobs_offer3:         'Bon ambient de treball',
    jobs_offer4:         'Possibilitats de creixement dins de l\'empresa',
    // Jobs form
    jobs_form_title:           'Formulari de candidatura',
    jobs_form_personal:        'Dades personals',
    jobs_form_fullname:        'Nom i cognoms',
    jobs_form_phone:           'Telèfon',
    jobs_form_email:           'Correu electrònic',
    jobs_form_location:        'Població / zona de residència',
    jobs_form_profile:         'Sobre el teu perfil',
    jobs_form_position:        'Lloc al qual optes',
    jobs_form_exp_years:       'Anys d\'experiència',
    jobs_form_startdate:       'Data d\'incorporació',
    jobs_form_license:         'Permís de conduir B',
    jobs_form_travel:          'Disponibilitat per a desplaçaments',
    jobs_form_yes:             'Sí',
    jobs_form_no:              'No',
    jobs_form_exptraining:     'Experiència i formació',
    jobs_form_exp_solar:       'Experiència en neteja de plaques solars',
    jobs_form_exp_maint:       'Experiència en manteniment o feines similars',
    jobs_form_exp_height:      'Experiència en treballs en alçada o cobertes',
    jobs_form_tr_prl:          'Formació en PRL',
    jobs_form_tr_height:       'Formació en treballs en alçada',
    jobs_form_tr_electric:     'Formació en risc elèctric',
    jobs_form_tr_solar:        'Formació en fotovoltaica',
    jobs_form_other_skills:    'Altres coneixements tècnics',
    jobs_form_attachments:     'Adjunts',
    jobs_form_cv:              'Currículum vitae (PDF, DOC)',
    jobs_form_certs:           'Certificats o documentació addicional',
    jobs_form_links:           'Enllaços',
    jobs_form_linkedin:        'Perfil de LinkedIn',
    jobs_form_other_links:     'Altres enllaços d\'interès',
    jobs_form_message_section: 'Missatge',
    jobs_form_message:         'Explica\'ns breument la teva experiència o per què t\'interessa treballar amb nosaltres',
    jobs_form_submit:          '📩 Enviar candidatura',
    jobs_form_ok_title:        'Candidatura rebuda!',
    jobs_form_ok_desc:         'Gràcies per l\'interès. Revisarem el teu perfil i ens posarem en contacte.',
    jobs_pos_cleaning:         'Neteja de plaques solars',
    jobs_pos_maint:            'Manteniment preventiu',
    jobs_pos_height:           'Treballs en alçada / cobertes',
    jobs_pos_other:            'Altres',
    jobs_exp_none:             'Sense experiència',
    jobs_exp_1:                'Menys d\'1 any',
    jobs_exp_2:                '1–3 anys',
    jobs_exp_3:                '3–5 anys',
    jobs_exp_4:                'Més de 5 anys',
  },

  es: {
    // Navbar
    nav_services:   'Servicios',
    nav_about:      'Nosotros',
    nav_how:        'Cómo trabajamos',
    nav_blog:       'Blog',
    nav_contact:    'Contacto',
    nav_quote:      'Pedir presupuesto',
    nav_residential:'Solar Residencial',
    nav_commercial: 'Solar Comercial',
    nav_maintenance:'Mantenimiento',
    nav_cleaning:   'Limpieza de Paneles',
    nav_monitoring: 'Monitorización',
    nav_aboutus:    'Quiénes somos',
    nav_faq:        'Preguntas Frecuentes',

    // Hero
    hero_tag:       '☀️ Servicios Solares en Cataluña',
    hero_tag2:      '🧹 Limpieza profesional de paneles solares',
    hero_title:     'Recupera el <em>máximo rendimiento</em> de tus paneles solares',
    hero_desc:      'Servicio profesional de limpieza y mantenimiento de placas solares para hogares y empresas en Cataluña',
    hero_quote:     'Pedir presupuesto',
    hero_how:       'Cómo trabajamos',
    hero_stat1_num: '500+',
    hero_stat1_lbl: 'Instalaciones',
    hero_stat2_num: '98%',
    hero_stat2_lbl: 'Satisfacción',
    hero_stat3_num: '10+',
    hero_stat3_lbl: 'Años de experiencia',
    hero_card1:     '🌱 0 emisiones',
    hero_card2:     '💰 Ahorro garantizado',
    hero_card3:     '⚡ Máxima eficiencia',

    // Trust bar
    trust1: 'Certificación IDAE',
    trust2: 'Seguro RC 5M€',
    trust3: 'Técnicos certificados',
    trust4: 'Garantía 25 años paneles',
    trust5: 'Informe post-servicio',

    // About
    about_label:   'Quiénes somos',
    about_title:   'Limpieza profesional de placas solares: recupera hasta un 30% de eficiencia',
    about_desc1:   'En Solmant nos especializamos en la limpieza y mantenimiento de placas solares. Los paneles limpios rinden hasta un 30% más, reduciendo directamente tu factura eléctrica.',
    about_desc2:   'Trabajamos con técnicas y equipos profesionales adaptados a cada instalación, sin productos químicos y sin riesgo para tus paneles.',
    about_f1_title:'Limpieza con Agua Descalcificada',
    about_f1_desc: 'Usamos agua descalcificada, sin productos químicos.',
    about_f2_title:'Instalación Certificada',
    about_f2_desc: 'Todos los técnicos están acreditados por la Generalitat de Catalunya.',
    about_f3_title:'Revisión Anual del Estado',
    about_f3_desc: 'Inspección anual completa para asegurar el perfecto funcionamiento de tu instalación solar.',
    about_btn:     'Conócenos mejor',

    // Services
    srv_label:   'Servicios',
    srv_title:   'Todo lo que necesitas para tu sistema solar',
    srv_desc:    'Ofrecemos una gama completa de servicios, desde la primera instalación hasta el mantenimiento preventivo y la limpieza profesional.',
    srv1_title:  'Instalación Residencial',
    srv1_desc:   'Creamos instalaciones solares a medida para casas y chalets, diseñadas para maximizar el ahorro, la eficiencia y la integración estética en tu hogar.',
    srv1_link:   'Saber más →',
    srv2_title:  'Instalación Comercial',
    srv2_desc:   'Implementamos soluciones solares para empresas, naves y comunidades, orientadas a reducir el gasto energético y mejorar la rentabilidad de cada proyecto.',
    srv2_link:   'Saber más →',
    srv3_title:  'Limpieza Profesional',
    srv3_desc:   'Eliminamos suciedad, polen y depósitos con sistemas de limpieza especializados que ayudan a recuperar la eficiencia y proteger el rendimiento de la instalación.',
    srv3_link:   'Saber más →',
    srv4_title:  'Mantenimiento Preventivo',
    srv4_desc:   'Supervisamos periódicamente la instalación para anticipar incidencias, alargar la vida útil del sistema y garantizar un funcionamiento óptimo.',
    srv4_link:   'Saber más →',
    srv5_title:  'Estudio de tu instalación',
    srv5_desc:   'Analizamos el estado y comportamiento de tu instalación solar para identificar pérdidas de rendimiento y proponer mejoras eficientes y útiles.',
    srv5_link:   'Saber más →',
    srv6_title:  'Asesoría y Subvenciones',
    srv6_desc:   'Te ayudamos a aprovechar las ayudas disponibles y a simplificar todos los trámites para que tu inversión solar sea más fácil, clara y rentable.',
    srv6_link:   'Saber más →',
    srv6_img:    'images/factura_castella.jpg',

    // Instalación Residencial – detail page
    res_hero_sub:       'Energía solar a medida para tu hogar',
    res_p1:             'En Solmant diseñamos instalaciones solares residenciales pensadas para adaptarse a las necesidades reales de cada hogar. No todas las casas consumen igual, ni todos los tejados ofrecen las mismas condiciones, por eso estudiamos cada caso de forma personalizada para proponer una solución eficiente, segura y rentable.',
    res_feat_label:     'Por qué Solmant',
    res_feat1:          'Diseño personalizado para cada vivienda',
    res_feat2:          'Estudio energético previo sin coste',
    res_feat3:          'Instalación segura y certificada',
    res_feat4:          'Asesoramiento en subvenciones disponibles',
    res_analysis_label: 'Análisis previo',
    res_analysis_title: 'Qué analizamos antes de instalar',
    res_analysis_intro: 'Antes de empezar, valoramos los factores que influyen directamente en el rendimiento de la instalación.',
    res_chk1:           'Orientación e inclinación del tejado',
    res_chk2:           'Espacio disponible en la cubierta',
    res_chk3:           'Posibles sombras u obstáculos',
    res_chk4:           'Consumo energético del hogar',
    res_chk5:           'Objetivos de ahorro y amortización',
    res_analysis_end:   'Este análisis previo nos permite definir una instalación equilibrada, bien dimensionada y preparada para ofrecer el máximo rendimiento posible desde el primer día.',
    res_efficient_title:'Instalaciones eficientes, seguras y bien integradas',
    res_efficient_desc: 'Nuestro objetivo no es solo instalar paneles solares, sino integrar una solución que funcione bien, que sea duradera y que encaje estéticamente con tu hogar. Trabajamos para que el sistema ofrezca un alto nivel de eficiencia, una ejecución cuidada y una integración visual limpia y profesional.',
    res_why_title:      'Por qué apostar por la energía solar residencial',
    res_why_desc:       'Instalar paneles solares en casa es una manera inteligente de reducir la dependencia de la red eléctrica y controlar mejor el gasto energético. Además del ahorro a medio y largo plazo, una buena instalación puede aumentar el valor del hogar y mejorar su eficiencia energética.',
    res_process_label:  'Cómo trabajamos',
    res_process_title:  'Nuestro proceso',
    res_process_desc:   'Te acompañamos durante todo el proceso, desde el primer estudio hasta la puesta en marcha de la instalación. Queremos que tengas claridad, confianza y la tranquilidad de saber que cada decisión se toma pensando en el rendimiento y la viabilidad real del proyecto.',
    res_smart_title:    'Pensado para quien busca una solución clara y rentable',
    res_smart_desc:     'Tanto si estás valorando dar el paso hacia el autoconsumo como si ya tienes claro que quieres instalar paneles solares, te ayudamos a encontrar la mejor opción para tu hogar con un enfoque práctico, honesto y profesional.',
    res_cta_title:      '¿Quieres saber qué instalación se adapta mejor a tu hogar?',
    res_cta_desc:       'Estudiaremos tu caso y te propondremos una solución solar pensada para maximizar el ahorro, la eficiencia y la rentabilidad.',
    res_cta_btn:        'Pide presupuesto gratuito',

    // Instalación Comercial – detail page
    com_hero_sub:        'Soluciones solares para empresas, naves y comunidades',
    com_p1:              'En Solmant desarrollamos instalaciones solares comerciales pensadas para reducir el gasto energético y mejorar la rentabilidad de cada proyecto. Trabajamos con empresas, naves industriales, negocios y comunidades que quieren aprovechar mejor la energía, controlar costes y avanzar hacia un modelo más eficiente y sostenible.',
    com_feat_label:      'Para quién es',
    com_feat1:           'Empresas y naves industriales con consumo elevado',
    com_feat2:           'Negocios con actividad diurna continuada',
    com_feat3:           'Comunidades de propietarios con zonas comunes',
    com_feat4:           'Proyectos orientados al retorno de la inversión',
    com_analysis_label:  'Análisis inicial',
    com_analysis_title:  'Un estudio adaptado a cada actividad',
    com_analysis_intro:  'Cada empresa tiene unas necesidades energéticas diferentes. Analizamos los factores clave para definir la mejor solución posible.',
    com_chk1:            'Tipo de consumo y horarios de actividad',
    com_chk2:            'Superficie disponible y condiciones de cubierta',
    com_chk3:            'Retorno de la inversión y período de amortización',
    com_chk4:            'Compatibilidad técnica y normativa aplicable',
    com_chk5:            'Objetivos de ahorro y eficiencia energética',
    com_analysis_end:    'Este estudio inicial nos permite definir una solución bien dimensionada, orientada a obtener el máximo rendimiento y un retorno coherente de la inversión.',
    com_cost_title:      'Reducción de costes y mejora de la eficiencia',
    com_cost_desc:       'Una instalación solar comercial bien planificada puede reducir significativamente la dependencia de la red eléctrica y ayudar a estabilizar el gasto energético. Esto es especialmente relevante en actividades con consumos elevados o continuos, donde una buena optimización puede tener un impacto directo en los costes operativos.',
    com_durable_title:   'Proyectos pensados para durar',
    com_durable_desc:    'Más allá de la instalación, buscamos que cada proyecto sea sólido, seguro y preparado para ofrecer resultados a largo plazo. Trabajamos con una visión práctica y profesional para que el sistema sea fiable, eficiente y fácil de mantener, siempre adaptado a la realidad de la actividad y del espacio disponible.',
    com_future_label:    'Visión de futuro',
    com_future_title:    'Una solución clara para negocios que quieren avanzar',
    com_future_desc:     'La energía solar es una oportunidad para mejorar la eficiencia del negocio, reducir la vulnerabilidad ante el aumento de los precios de la energía y reforzar una imagen empresarial más responsable y preparada para el futuro. Tanto en pequeños negocios como en instalaciones de mayor escala, planteamos cada proyecto con criterio técnico y enfoque realista.',
    com_process_title:   'Acompañamiento durante todo el proceso',
    com_process_desc:    'Te acompañamos desde la fase de estudio hasta la definición de la mejor propuesta para tu empresa o comunidad. Nuestro objetivo es ofrecerte una solución comprensible, bien planteada y alineada con tus objetivos de consumo, ahorro y rentabilidad.',
    com_cta_title:       '¿Quieres valorar una instalación solar para tu negocio o comunidad?',
    com_cta_desc:        'Estudiaremos tu caso y te propondremos una solución adaptada al consumo, al espacio disponible y a los objetivos reales del proyecto.',
    com_cta_btn:         'Pide presupuesto gratuito',

    // Limpieza Profesional – detail page
    net_hero_sub:        'Recupera el rendimiento real de tu instalación',
    net_p1:              'Con el paso del tiempo, los paneles solares acumulan polvo, polen, suciedad ambiental, residuos orgánicos y otros depósitos que pueden afectar su rendimiento. Aunque a menudo no se percibe a simple vista, esta acumulación puede reducir la eficiencia de la instalación y hacer que produzca menos energía de la que debería generar.',
    net_feat_label:      'Cómo lo hacemos',
    net_feat1:           'Técnicas específicas para paneles solares',
    net_feat2:           'Sin productos químicos agresivos',
    net_feat3:           'Compatible con todo tipo de instalación',
    net_feat4:           'Detección visual de anomalías incluida',
    net_why_label:       'Factores que afectan el rendimiento',
    net_why_title:       'Por qué es importante una limpieza adecuada',
    net_why_intro:       'Cuando los paneles están sucios, la captación solar se ve afectada. Estos son los principales factores que lo aceleran.',
    net_chk1:            'Polvo, polen y suciedad ambiental',
    net_chk2:            'Residuos orgánicos y depósitos persistentes',
    net_chk3:            'Excrementos de aves y partículas adheridas',
    net_chk4:            'Zonas con poca lluvia o mucha contaminación',
    net_chk5:            'Pérdida de eficiencia silenciosa y progresiva',
    net_why_end:         'Una limpieza bien hecha ayuda a recuperar eficiencia, mejorar el comportamiento del sistema y mantenerlo en condiciones óptimas, especialmente en zonas con polvo, contaminación o poca lluvia.',
    net_specific_title:  'Una limpieza específica para paneles solares',
    net_specific_desc:   'En Solmant realizamos limpiezas profesionales adaptadas a este tipo de instalaciones, utilizando sistemas y técnicas pensadas para eliminar la suciedad sin dañar la superficie de los paneles ni sus componentes. No se trata solo de limpiar, sino de hacerlo correctamente, con criterio técnico y con cuidado para preservar el estado y la vida útil de la instalación.',
    net_safe_title:      'Limpieza segura y orientada al mantenimiento',
    net_safe_desc:       'La limpieza profesional también es una manera de cuidar la instalación y detectar visualmente posibles anomalías, acumulaciones persistentes o señales de desgaste. Por eso la planteamos como una parte clave del mantenimiento preventivo y de la conservación general del sistema.',
    net_adapt_label:     'Servicio adaptado',
    net_adapt_title:     'Para viviendas, empresas e instalaciones de todas las dimensiones',
    net_adapt_desc:      'Adaptamos el servicio tanto a instalaciones residenciales como comerciales, siempre con un enfoque profesional y con el objetivo de que tu instalación funcione mejor, durante más tiempo y con menos pérdidas de rendimiento.',
    net_invest_title:    'Una pequeña inversión que puede marcar la diferencia',
    net_invest_desc:     'Mantener los paneles limpios no es solo una cuestión estética. Es una manera práctica de proteger la inversión realizada, evitar pérdidas innecesarias y ayudar al sistema a trabajar en las mejores condiciones posibles a lo largo del tiempo.',
    net_cta_title:       '¿Quieres recuperar la eficiencia de tus paneles solares?',
    net_cta_desc:        'Valoramos el estado de la instalación y te ofrecemos una limpieza profesional pensada para proteger su rendimiento y durabilidad.',
    net_cta_btn:         'Pide presupuesto gratuito',

    // Mantenimiento Preventivo – detail page
    mnt_hero_sub:        'Proteger la instalación es proteger tu inversión',
    mnt_p1:              'Una instalación solar está pensada para funcionar durante muchos años, pero para que mantenga un buen rendimiento necesita revisiones periódicas. El mantenimiento preventivo permite comprobar el estado general del sistema, detectar posibles incidencias antes de que vayan a más y asegurar que cada elemento sigue trabajando en las mejores condiciones.',
    mnt_feat_label:      'Qué incluye',
    mnt_feat1:           'Revisión periódica planificada',
    mnt_feat2:           'Detección temprana de incidencias',
    mnt_feat3:           'Alarga la vida útil del sistema',
    mnt_feat4:           'Informe del estado de la instalación',
    mnt_check_label:     'Revisión preventiva',
    mnt_check_title:     'Revisar hoy para evitar problemas mañana',
    mnt_check_intro:     'Muchas anomalías no se detectan hasta que el rendimiento ya ha bajado. Con un mantenimiento adecuado, se pueden identificar a tiempo.',
    mnt_chk1:            'Estado general del sistema y componentes',
    mnt_chk2:            'Conexiones y elementos eléctricos',
    mnt_chk3:            'Suciedad persistente o acumulación irregular',
    mnt_chk4:            'Rendimiento energético y comportamiento del sistema',
    mnt_chk5:            'Seguridad y estabilidad de la instalación',
    mnt_check_end:       'Identificar señales de desgaste, conexiones que hay que revisar u otros factores a tiempo puede evitar que un problema pequeño se convierta en una incidencia mayor.',
    mnt_service_title:   'Un servicio orientado al buen funcionamiento del sistema',
    mnt_service_desc:    'En Solmant entendemos el mantenimiento como una parte esencial de la vida útil de cualquier instalación solar. No se trata solo de reaccionar cuando hay una avería, sino de actuar antes para que el sistema siga siendo eficiente, estable y fiable con el paso del tiempo.',
    mnt_peace_title:     'Más eficiencia, más tranquilidad',
    mnt_peace_desc:      'Hacer revisiones periódicas ayuda a mantener el rendimiento energético, reducir el riesgo de incidencias y alargar la durabilidad del sistema. También ofrece una mayor tranquilidad al usuario, porque permite tener una visión más clara del estado de la instalación y anticipar posibles necesidades.',
    mnt_adapt_label:     'Personalizado',
    mnt_adapt_title:     'Adaptado a instalaciones residenciales y comerciales',
    mnt_adapt_desc:      'Cada instalación tiene sus características, y por eso adaptamos el mantenimiento al tipo de sistema, al entorno y al uso que se hace de él. Tanto en viviendas como en negocios o comunidades, el objetivo es el mismo: preservar el buen funcionamiento de la instalación y evitar pérdidas de rendimiento innecesarias.',
    mnt_smart_title:     'Una manera inteligente de alargar la vida útil',
    mnt_smart_desc:      'El mantenimiento preventivo es una decisión práctica para conservar mejor la instalación, proteger la inversión y garantizar que el sistema siga dando el mejor resultado posible año tras año. Con una supervisión adecuada, es más fácil mantener la eficiencia y reducir imprevistos.',
    mnt_cta_title:       '¿Quieres mantener tu instalación en las mejores condiciones?',
    mnt_cta_desc:        'Te ayudamos a revisar su estado, prevenir incidencias y asegurar un funcionamiento eficiente, seguro y duradero.',
    mnt_cta_btn:         'Pide presupuesto gratuito',


    // Estudio + Asesoría – detail pages (ES)
    est_hero_h1:         'Estudio de tu instalación',
    est_hero_sub:        'Entender la instalación para sacarle el máximo rendimiento',
    est_p1:              'En Solmant analizamos el estado y el comportamiento de tu instalación solar para detectar posibles pérdidas de eficiencia, puntos de mejora o incidencias que pueden estar afectando su rendimiento. A menudo, una instalación aparentemente correcta no está produciendo todo lo que podría, y un buen estudio permite entender por qué.',
    est_feat_label:      'Qué incluye',
    est_feat1:           'Análisis detallado de la instalación',
    est_feat2:           'Detección de pérdidas de eficiencia',
    est_feat3:           'Recomendaciones concretas de mejora',
    est_feat4:           'Informe claro y orientado a la acción',
    est_check_label:     'Revisión global',
    est_check_title:     'Una revisión orientada a resultados reales',
    est_check_intro:     'No se trata solo de mirar los paneles, sino de evaluar la instalación con una visión global. Revisamos los factores que pueden influir directamente en la producción.',
    est_chk1:            'Estado general de los paneles y componentes',
    est_chk2:            'Presencia de suciedad o acumulación persistente',
    est_chk3:            'Posibles sombras en la cubierta',
    est_chk4:            'Señales de desgaste o deterioro',
    est_chk5:            'Factores que reducen la eficiencia del sistema',
    est_check_end:       'Esta evaluación global nos permite ofrecerte una visión real de cómo funciona el sistema y qué acciones concretas pueden mejorar su rendimiento.',
    est_detect_title:    'Detectar problemas antes de que se hagan más grandes',
    est_detect_desc:     'Un estudio a tiempo puede ayudar a identificar anomalías que, si no se revisan, pueden acabar traduciéndose en menos producción, más pérdidas energéticas o una menor vida útil de la instalación. Por eso este servicio es especialmente útil tanto para sistemas que llevan tiempo en funcionamiento como para instalaciones que no están rindiendo como se esperaba.',
    est_base_title:      'Una base clara para decidir mejor',
    est_base_desc:       'Conocer el estado real de la instalación es clave para saber si se necesita una limpieza, una revisión más técnica, un mantenimiento específico o simplemente pequeñas acciones de optimización. Este estudio te da una visión más clara del sistema y te ayuda a tomar decisiones con más criterio y más confianza.',
    est_adapt_label:     'Servicio flexible',
    est_adapt_title:     'Para viviendas, negocios y comunidades',
    est_adapt_desc:      'Adaptamos este servicio a diferentes tipos de instalación, tanto residenciales como comerciales. El objetivo es siempre el mismo: entender cómo está funcionando el sistema, detectar qué se puede mejorar y ayudarte a aprovechar mejor tu inversión solar.',
    est_control_title:   'Más información, más control, más eficiencia',
    est_control_desc:    'Cuando conoces mejor tu instalación, es más fácil evitar pérdidas innecesarias y mantener el sistema en condiciones óptimas. En Solmant enfocamos este servicio como una herramienta útil para recuperar el control, ganar tranquilidad y asegurar que la instalación trabaja al nivel que le corresponde.',
    est_cta_title:       '¿Quieres saber si tu instalación está rindiendo como debería?',
    est_cta_desc:        'En Solmant estudiamos el estado de tu sistema solar para detectar problemas, evitar pérdidas de energía y ayudarte a sacarle el máximo partido.',
    est_cta_btn:         'Pide un estudio gratuito',
    ase_hero_h1:         'Asesoría y Subvenciones',
    ase_hero_sub:        'Te ayudamos a entender las opciones disponibles',
    ase_p1:              'En Solmant sabemos que, a la hora de hacer una instalación solar, no todo depende solo de la parte técnica. También es importante conocer qué ayudas, bonificaciones u opciones administrativas pueden estar disponibles en cada momento. Por eso ofrecemos un servicio de asesoría pensado para orientarte con claridad y ayudarte a entender mejor el contexto de tu inversión.',
    ase_feat_label:      'Qué hacemos',
    ase_feat1:           'Orientación sobre ayudas y bonificaciones vigentes',
    ase_feat2:           'Apoyo en trámites y documentación',
    ase_feat3:           'Visión clara del proceso administrativo',
    ase_feat4:           'Trato cercano, explicación honesta y directa',
    ase_check_label:     'Aspectos que cubrimos',
    ase_check_title:     'Menos dudas, más claridad',
    ase_check_intro:     'Los trámites y la información sobre subvenciones pueden generar confusión. Te ayudamos a orientarte en los aspectos más importantes.',
    ase_chk1:            'Convocatorias y ayudas que pueden estar vigentes',
    ase_chk2:            'Documentación habitual que se puede requerir',
    ase_chk3:            'Pasos habituales del proceso administrativo',
    ase_chk4:            'Aspectos fiscales y bonificaciones posibles',
    ase_chk5:            'Criterios de rentabilidad y retorno esperado',
    ase_check_end:       'Nuestro objetivo es ayudarte a identificar qué opciones pueden aplicar a tu caso y darte una visión más clara del proceso, para que puedas tomar decisiones con más seguridad.',
    ase_process_title:   'Un acompañamiento útil durante el proceso',
    ase_process_desc:    'Este servicio está pensado para facilitarte el camino y reducir la sensación de complejidad que a menudo acompaña este tipo de gestiones. Te orientamos sobre los pasos habituales, la documentación que se puede requerir y los aspectos que conviene tener en cuenta para que el proceso sea más ordenado y comprensible.',
    ase_invest_title:    'Una inversión mejor planteada',
    ase_invest_desc:     'Conocer con antelación las posibles ayudas o ventajas fiscales puede ayudarte a valorar mejor la rentabilidad de la instalación y a planificarla con más perspectiva. Más allá de la subvención en sí, disponer de una buena orientación te permite afrontar el proyecto con más confianza y con una visión más completa del coste real y del retorno esperado.',
    ase_adapt_label:     'Adaptado a cada caso',
    ase_adapt_title:     'Para particulares, empresas y comunidades',
    ase_adapt_desc:      'Adaptamos la asesoría según el tipo de proyecto y el perfil de cada cliente. Tanto si se trata de una vivienda como de un negocio o una comunidad, en Solmant queremos que tengas la información necesaria para avanzar con tranquilidad y criterio.',
    ase_honest_title:    'Orientación clara, trato cercano',
    ase_honest_desc:     'En Solmant entendemos que un buen servicio también significa explicar bien las cosas. Por eso ponemos el foco en una asesoría práctica, cercana y honesta, pensada para que entiendas las opciones disponibles sin complicaciones innecesarias.',
    ase_cta_title:       '¿Quieres saber qué ayudas u opciones pueden aplicar a tu proyecto?',
    ase_cta_desc:        'En Solmant te orientamos para que entiendas mejor los trámites, las posibles bonificaciones y el contexto real de tu inversión solar.',
    ase_cta_btn:         'Habla con nosotros',

    // How it works
    how_label:  'Nuestro proceso',
    how_title:  'Cómo trabajamos',
    how_desc:   'Un proceso sencillo y transparente desde el primer contacto hasta el servicio postventa.',
    step1_title:'Consulta gratuita',
    step1_desc: 'Analizamos tu hogar y consumo para diseñar la mejor solución.',
    step2_title:'Presupuesto detallado',
    step2_desc: 'Informe escrito con todos los detalles, sin letra pequeña.',
    step3_title:'Instalación y limpieza',
    step3_desc: 'Técnicos certificados realizan el trabajo de forma limpia y segura.',
    step4_title:'Informe y seguimiento',
    step4_desc: 'Documentación completa y acceso a la app de monitorización.',

    // Calculator
    calc_label:      'Calculadora Solar',
    calc_title:      'Calcula tu sistema solar ideal',
    calc_desc:       'Introduce las medidas del tejado o la superficie disponible y te decimos cuántos paneles necesitas y cuánto puedes ahorrar.',
    calc_tab1:       '🏠 Tejado',
    calc_tab2:       '🌿 Suelo / Cubierta plana',
    calc_length:     'Longitud (m)',
    calc_width:      'Anchura (m)',
    calc_area:       'Superficie total (m²)',
    calc_orientation:'Orientación',
    calc_orient_s:   'Sur ☀️',
    calc_orient_se:  'Sureste',
    calc_orient_sw:  'Suroeste',
    calc_orient_e:   'Este',
    calc_orient_w:   'Oeste',
    calc_inclination:'Inclinación (grados)',
    calc_consumption:'Consumo mensual (kWh)',
    calc_shadow:     'Zonas de sombra',
    calc_shadow_no:  'Sin sombra',
    calc_shadow_some:'Sombra parcial',
    calc_shadow_yes: 'Sombra significativa',
    calc_btn:        '⚡ Calcular ahora',
    calc_res_title:  '📊 Estimación para tu instalación',
    calc_res1_lbl:   'Paneles recomendados',
    calc_res2_lbl:   'kWp instalados',
    calc_res3_lbl:   'Ahorro anual estimado (€)',
    calc_res4_lbl:   'Superficie necesaria (m²)',
    calc_res5_lbl:   'CO₂ evitado (kg/año)',
    calc_res6_lbl:   'Retorno inversión aprox.',
    calc_note:       '* Estimación orientativa. Solicita un estudio personalizado gratuito.',
    calc_cta:        'Solicitar estudio gratuito',

    // Why us
    why_label: 'Por qué Solmant',
    why_title: 'Razones para confiar en nosotros',
    why1_title:'Técnicos Certificados',
    why1_desc: 'Todo el personal tiene las acreditaciones requeridas por ley y formación continua.',
    why2_title:'Garantía Real',
    why2_desc: 'Garantía de 25 años en paneles, 10 años en inversores y 2 años en mano de obra.',
    why3_title:'Sin Químicos',
    why3_desc: 'Nuestra limpieza usa únicamente agua desionizada. Respetuosa con el medio ambiente.',
    why4_title:'Informe Detallado',
    why4_desc: 'Cada servicio incluye un informe fotográfico completo y recomendaciones personalizadas.',
    why5_title:'Precio Transparente',
    why5_desc: 'Presupuesto cerrado sin sorpresas. El precio acordado es lo que pagas.',
    why6_title:'Cobertura Cataluña',
    why6_desc: 'Atendemos toda Cataluña con tiempo de respuesta inferior a 48 horas.',

    // FAQ
    faq_label: 'FAQ',
    faq_title: 'Preguntas frecuentes',
    faq1_q: '¿Con qué frecuencia hay que limpiar los paneles solares?',
    faq1_a: 'Se recomienda una limpieza profesional al menos una vez al año, idealmente en primavera. En zonas con mucho polen, polución o excrementos de aves, quizás dos veces al año. Los paneles sucios pueden perder hasta el 25-30% de su rendimiento.',
    faq2_q: '¿Cuánto tarda una instalación residencial?',
    faq2_a: 'Una instalación típica residencial (6-12 paneles) se completa en 1-2 días. Las instalaciones comerciales de mayor envergadura pueden requerir de 3 a 5 días hábiles.',
    faq3_q: '¿Qué ayudas y subvenciones hay disponibles en Cataluña?',
    faq3_a: 'En Cataluña existe el programa PREE 5000 del IDAE y las ayudas MOVES III para autoconsumo. Además, muchos ayuntamientos ofrecen bonificaciones en el IBI de hasta el 50% durante los primeros 5 años. Te asesoramos en todo el trámite sin coste adicional.',
    faq4_q: '¿Se puede instalar en una comunidad de vecinos?',
    faq4_a: 'Sí, las comunidades de propietarios se benefician enormemente de las instalaciones solares compartidas. Se necesitan 3/5 partes de los votos en junta. Te acompañamos en todo el proceso administrativo y legal.',
    faq5_q: '¿Qué mantenimiento requiere un sistema solar?',
    faq5_a: 'Un sistema solar bien instalado requiere muy poco mantenimiento. Recomendamos: una limpieza profesional anual, una revisión técnica cada 2 años y la monitorización continua vía app. Los inversores suelen tener una vida útil de 10-15 años.',
    faq6_q: '¿Cómo funciona el sistema de monitorización?',
    faq6_a: 'Instalamos un datalogger conectado a internet que envía datos en tiempo real a nuestra plataforma y a tu app móvil. Recibes alertas si el rendimiento baja por debajo de lo normal e informes mensuales automáticos.',

    // Blog
    blog_label:     'Blog',
    blog_title:     'Consejos y novedades solar',
    blog_page_desc: 'Artículos sobre limpieza, mantenimiento, subvenciones y tecnología fotovoltaica en Cataluña.',
    blog_all:       'Ver todos los artículos',
    blog1_tag:   'Mantenimiento',
    blog1_title: 'Por qué limpiar los paneles cada año: el impacto real en el rendimiento',
    blog1_desc:  'La suciedad, el polen y los depósitos pueden reducir la producción solar y afectar el rendimiento de la instalación. Te explicamos cuándo conviene limpiar, qué evitar y por qué el mantenimiento marca la diferencia.',
    blog2_tag:   'Subvenciones',
    blog2_title: 'Ayudas solares en Cataluña en 2026: qué sigue vigente y qué ya ha cerrado',
    blog2_desc:  'Repasamos el estado real de las ayudas: qué ha finalizado, qué bonificaciones fiscales municipales pueden seguir disponibles y dónde consultar la información oficial antes de instalar.',
    blog3_tag:   'Tecnología',
    blog3_title: 'Tecnología solar en 2026: mejoras que ya están marcando la diferencia',
    blog3_desc:  'Módulos más eficientes, mayor presencia de tecnología bifacial y nuevas soluciones para minimizar el efecto de la suciedad: te explicamos qué innovaciones están mejorando las instalaciones solares actuales.',
    blog_date1:  '12 mar 2025',
    blog_date2:  '28 feb 2025',
    blog_date3:  '14 feb 2025',

    // Contact
    contact_label:    'Contacto',
    contact_title:    'Hablemos de tu proyecto solar',
    contact_desc:     'Rellena el formulario y te contactaremos en menos de 24 horas con un presupuesto personalizado y sin compromiso.',
    contact_phone:    '+34 93 XXX XX XX',
    contact_email:    'hola@solmant.cat',
    contact_address:  'Igualada, Cataluña',
    contact_hours:    'Lun-Vie: 8h – 19h',
    form_title:       'Solicita presupuesto gratuito',
    form_name:        'Nombre completo',
    form_phone:       'Teléfono',
    form_email:       'Correo electrónico',
    form_service:     'Servicio de interés',
    form_srv_inst:    'Instalación',
    form_srv_clean:   'Limpieza',
    form_srv_maint:   'Mantenimiento',
    form_srv_amp:     'Ampliación',
    form_srv_rep:     'Reparación',
    form_srv_other:   'Otros',
    form_message:     'Cuéntanos tu caso',
    form_submit:      '📩 Enviar solicitud',
    form_ok_title:    '¡Mensaje recibido!',
    form_ok_desc:     'Te contactaremos en menos de 24 horas. Gracias por confiar en Solmant.',

    // Footer
    footer_desc:     'Especialistas en limpieza y mantenimiento de placas solares en Cataluña.',
    footer_nav:      'Navegación',
    footer_services: 'Servicios',
    footer_contact:  'Contacto',
    footer_newsletter_title: 'Boletín',
    footer_newsletter_placeholder: 'Tu email',
    footer_newsletter_btn: 'Suscribirme',
    footer_copy:    '© 2026 Solmant. Todos los derechos reservados.',
    footer_privacy: 'Política de privacidad',
    footer_terms:   'Aviso legal',
    footer_cookies: 'Cookies',

    // Jobs page
    back_btn: '← Volver al inicio',

    // Jobs
    jobs_nav:            'Trabaja con nosotros',
    jobs_label:          'Únete al equipo',
    jobs_title:          'Trabaja con nosotros',
    jobs_intro:          'En Solmant buscamos personas responsables, comprometidas y con ganas de trabajar en el sector de la limpieza y mantenimiento de paneles solares para particulares y empresas.',
    jobs_seek_title:     '¿Qué buscamos?',
    jobs_seek_desc:      'Perfiles para tareas de limpieza técnica, revisión visual, mantenimiento preventivo y apoyo en trabajos sobre cubiertas e instalaciones solares.',
    jobs_req_title:      'Requisitos esenciales del puesto',
    jobs_req1:           'Responsabilidad, seriedad y buena actitud',
    jobs_req2:           'Capacidad para trabajar en equipo',
    jobs_req3:           'Compromiso con la seguridad y el trabajo bien hecho',
    jobs_req4:           'Buena condición física para tareas operativas',
    jobs_req5:           'Disponibilidad para desplazarse a instalaciones de clientes',
    jobs_req6:           'Permiso de conducir B',
    jobs_req7:           'No tener limitaciones para trabajos en altura, cuando el puesto lo requiera',
    jobs_val_title:      'Se valorará especialmente',
    jobs_val1:           'Experiencia en limpieza de paneles solares',
    jobs_val2:           'Experiencia en mantenimiento preventivo o trabajos similares',
    jobs_val3:           'Experiencia en cubiertas, trabajos en altura o entornos técnicos',
    jobs_val4:           'Trato profesional con clientes particulares y empresas',
    jobs_val5:           'Capacidad para detectar incidencias básicas y comunicar correctamente el estado de la instalación',
    jobs_training_title: 'Títulos, cursos y formación que se valorarán',
    jobs_training1:      'Formación en trabajos en altura',
    jobs_training2:      'Formación en PRL / Prevención de Riesgos Laborales',
    jobs_training3:      'Formación en riesgo eléctrico',
    jobs_training4:      'Formación en plataformas elevadoras (PEMP)',
    jobs_training5:      'Formación o experiencia en instalaciones solares fotovoltaicas',
    jobs_training6:      'Certificado profesional de montaje y mantenimiento de instalaciones solares fotovoltaicas',
    jobs_training7:      'FP de Instalaciones Eléctricas y Automáticas',
    jobs_training8:      'FP de Energías Renovables',
    jobs_training9:      'Conocimientos de electricidad, mantenimiento o instalaciones técnicas',
    jobs_offer_title:    '¿Qué ofrecemos?',
    jobs_offer1:         'Incorporación a un sector con gran proyección',
    jobs_offer2:         'Formación y aprendizaje continuo',
    jobs_offer3:         'Buen ambiente de trabajo',
    jobs_offer4:         'Posibilidades de crecimiento dentro de la empresa',
    // Jobs form
    jobs_form_title:           'Formulario de candidatura',
    jobs_form_personal:        'Datos personales',
    jobs_form_fullname:        'Nombre y apellidos',
    jobs_form_phone:           'Teléfono',
    jobs_form_email:           'Correo electrónico',
    jobs_form_location:        'Población / zona de residencia',
    jobs_form_profile:         'Sobre tu perfil',
    jobs_form_position:        'Puesto al que optas',
    jobs_form_exp_years:       'Años de experiencia',
    jobs_form_startdate:       'Fecha de incorporación',
    jobs_form_license:         'Permiso de conducir B',
    jobs_form_travel:          'Disponibilidad para desplazamientos',
    jobs_form_yes:             'Sí',
    jobs_form_no:              'No',
    jobs_form_exptraining:     'Experiencia y formación',
    jobs_form_exp_solar:       'Experiencia en limpieza de paneles solares',
    jobs_form_exp_maint:       'Experiencia en mantenimiento o trabajos similares',
    jobs_form_exp_height:      'Experiencia en trabajos en altura o cubiertas',
    jobs_form_tr_prl:          'Formación en PRL',
    jobs_form_tr_height:       'Formación en trabajos en altura',
    jobs_form_tr_electric:     'Formación en riesgo eléctrico',
    jobs_form_tr_solar:        'Formación en fotovoltaica',
    jobs_form_other_skills:    'Otros conocimientos técnicos',
    jobs_form_attachments:     'Adjuntos',
    jobs_form_cv:              'Currículum vitae (PDF, DOC)',
    jobs_form_certs:           'Certificados o documentación adicional',
    jobs_form_links:           'Enlaces',
    jobs_form_linkedin:        'Perfil de LinkedIn',
    jobs_form_other_links:     'Otros enlaces de interés',
    jobs_form_message_section: 'Mensaje',
    jobs_form_message:         'Cuéntanos brevemente tu experiencia o por qué te interesa trabajar con nosotros',
    jobs_form_submit:          '📩 Enviar candidatura',
    jobs_form_ok_title:        '¡Candidatura recibida!',
    jobs_form_ok_desc:         'Gracias por tu interés. Revisaremos tu perfil y nos pondremos en contacto contigo.',
    jobs_pos_cleaning:         'Limpieza de paneles solares',
    jobs_pos_maint:            'Mantenimiento preventivo',
    jobs_pos_height:           'Trabajos en altura / cubiertas',
    jobs_pos_other:            'Otros',
    jobs_exp_none:             'Sin experiencia',
    jobs_exp_1:                'Menos de 1 año',
    jobs_exp_2:                '1–3 años',
    jobs_exp_3:                '3–5 años',
    jobs_exp_4:                'Más de 5 años',
  }
};

// ── Active language ──────────────────────
let currentLang = localStorage.getItem('solmant-lang') || 'ca';

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('solmant-lang', lang);
  document.documentElement.lang = lang === 'ca' ? 'ca' : 'es';
  applyTranslations();
  updateLangButtons();
}

function applyTranslations() {
  const t = translations[currentLang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = t[key];
      } else {
        el.innerHTML = t[key];
      }
    }
  });
  // Language-specific image sources
  document.querySelectorAll('[data-i18n-src]').forEach(el => {
    const key = el.getAttribute('data-i18n-src');
    if (t[key] !== undefined) el.src = t[key];
  });
  // Options inside selects
  document.querySelectorAll('[data-i18n-option]').forEach(el => {
    const key = el.getAttribute('data-i18n-option');
    if (t[key] !== undefined) el.textContent = t[key];
  });
}

function updateLangButtons() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
  });
}

// ── Navbar scroll ────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// ── Mobile menu ──────────────────────────
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
  document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
});
document.querySelectorAll('.mobile-menu a').forEach(a => {
  a.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// ── Smooth scroll for anchor links ───────
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 80;
      window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
    }
  });
});

// ── Scroll animations ────────────────────
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-up, .stagger-children').forEach(el => observer.observe(el));

// ── FAQ accordion ────────────────────────
document.querySelectorAll('.faq-item').forEach(item => {
  item.querySelector('.faq-q').addEventListener('click', () => {
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

// ── Calculator tabs ──────────────────────
document.querySelectorAll('.calc-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.tab;
    document.querySelectorAll('.calc-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.calc-panel').forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById(target).classList.add('active');
    document.querySelectorAll('.calc-result').forEach(r => r.classList.remove('show'));
  });
});

// Range slider display
document.querySelectorAll('.range-slider').forEach(slider => {
  const display = slider.nextElementSibling;
  slider.addEventListener('input', () => {
    display.textContent = slider.value + (slider.dataset.unit || '');
  });
});

// ── Calculator logic ─────────────────────
function calculateSolar(area, orientation, inclination, consumption, shadow, mode) {
  // Panel specs: standard 400W panel ≈ 2m²
  const panelArea = 2.0;
  const panelPower = 0.4; // kWp

  // Orientation efficiency factor
  const orientFactor = { s: 1.0, se: 0.93, sw: 0.93, e: 0.78, w: 0.78 };
  const oFac = orientFactor[orientation] || 1.0;

  // Shadow factor
  const shadowFactor = { none: 1.0, partial: 0.85, heavy: 0.65 };
  const sFac = shadowFactor[shadow] || 1.0;

  // Inclination bonus (optimal ~30-35°)
  const inclinationBonus = 1 - Math.abs(inclination - 32) * 0.004;

  // Usable area (80% efficiency for roof, 85% for ground)
  const usableFactor = mode === 'roof' ? 0.75 : 0.82;
  const usableArea = area * usableFactor;

  // Number of panels
  const numPanels = Math.max(1, Math.floor(usableArea / panelArea));
  const installedKwp = numPanels * panelPower;

  // Annual production (Spain avg: ~1650 kWh/kWp/year in Catalunya)
  const baseProduction = 1650;
  const annualProduction = installedKwp * baseProduction * oFac * sFac * inclinationBonus;

  // Annual savings (avg Spain: 0.18 €/kWh)
  const electricityPrice = 0.185;
  const annualSavings = Math.round(annualProduction * electricityPrice);

  // CO2 avoided (avg Spain: 0.24 kg CO2/kWh)
  const co2Avoided = Math.round(annualProduction * 0.24);

  // ROI (rough estimate)
  const costPerKwp = 1500; // €/kWp installed
  const totalCost = installedKwp * costPerKwp;
  const roiYears = totalCost / annualSavings;

  return {
    panels:    numPanels,
    kwp:       installedKwp.toFixed(2),
    savings:   annualSavings.toLocaleString(),
    area:      Math.round(numPanels * panelArea),
    co2:       co2Avoided.toLocaleString(),
    roi:       roiYears.toFixed(1) + (currentLang === 'es' ? ' años' : ' anys')
  };
}

document.querySelectorAll('.calc-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const panel = btn.closest('.calc-panel');
    const mode  = panel.id === 'panel-roof' ? 'roof' : 'ground';
    let area;

    if (mode === 'roof') {
      const length = parseFloat(panel.querySelector('[data-field="length"]').value) || 8;
      const width  = parseFloat(panel.querySelector('[data-field="width"]').value) || 5;
      area = length * width;
    } else {
      area = parseFloat(panel.querySelector('[data-field="area"]').value) || 40;
    }

    const orientation = panel.querySelector('[data-field="orientation"]').value;
    const inclination = parseInt(panel.querySelector('[data-field="inclination"]').value) || 30;
    const consumption = parseFloat(panel.querySelector('[data-field="consumption"]').value) || 350;
    const shadow      = panel.querySelector('[data-field="shadow"]').value;

    const res = calculateSolar(area, orientation, inclination, consumption, shadow, mode);
    const resultDiv = panel.querySelector('.calc-result');

    const t = translations[currentLang];

    resultDiv.innerHTML = `
      <h3>${t.calc_res_title}</h3>
      <div class="result-grid">
        <div class="result-item">
          <div class="result-num">${res.panels}</div>
          <div class="result-label">${t.calc_res1_lbl}</div>
        </div>
        <div class="result-item">
          <div class="result-num">${res.kwp}</div>
          <div class="result-label">${t.calc_res2_lbl}</div>
        </div>
        <div class="result-item">
          <div class="result-num">${res.savings}€</div>
          <div class="result-label">${t.calc_res3_lbl}</div>
        </div>
        <div class="result-item">
          <div class="result-num">${res.area}</div>
          <div class="result-label">${t.calc_res4_lbl}</div>
        </div>
        <div class="result-item">
          <div class="result-num">${res.co2}</div>
          <div class="result-label">${t.calc_res5_lbl}</div>
        </div>
        <div class="result-item">
          <div class="result-num">${res.roi}</div>
          <div class="result-label">${t.calc_res6_lbl}</div>
        </div>
      </div>
      <p class="result-note">${t.calc_note}</p>
      <div style="text-align:center;margin-top:1.25rem">
        <a href="#contact" class="btn btn-primary">${t.calc_cta}</a>
      </div>
    `;
    resultDiv.classList.add('show');
    resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });
});

// ── Jobs form ────────────────────────────
const jobsForm = document.getElementById('jobsForm');
if (jobsForm) {
  jobsForm.addEventListener('submit', e => {
    e.preventDefault();
    const t = translations[currentLang];
    jobsForm.style.display = 'none';
    const success = document.getElementById('jobsFormSuccess');
    success.querySelector('.ok-title').textContent = t.jobs_form_ok_title;
    success.querySelector('.ok-desc').textContent  = t.jobs_form_ok_desc;
    success.classList.add('show');
  });
}

// ── Contact form ─────────────────────────
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    const t = translations[currentLang];
    contactForm.style.display = 'none';
    const success = contactForm.nextElementSibling;
    success.querySelector('.ok-title').textContent = t.form_ok_title;
    success.querySelector('.ok-desc').textContent  = t.form_ok_desc;
    success.classList.add('show');
  });
}

// ── Newsletter form ──────────────────────
document.querySelectorAll('.newsletter-form').forEach(form => {
  form.addEventListener('submit', e => {
    e.preventDefault();
    form.innerHTML = '<span style="color:var(--green-soft);font-size:0.85rem">✅ Subscrit!</span>';
  });
});

// ── Hero Slideshow ───────────────────────
(function () {
  const _initTime = Date.now();
  const slides = document.querySelectorAll('.hero-slide');
  const dots   = document.querySelectorAll('.slide-dot');
  const prev   = document.querySelector('.slide-prev');
  const next   = document.querySelector('.slide-next');
  if (!slides.length) return;

  let current   = 0;
  let timer     = null;
  const DELAY   = 3000; // ms between slides

  function goTo(index) {
    slides[current].classList.remove('active');
    if (dots[current]) dots[current].classList.remove('active');
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('active');
    if (dots[current]) dots[current].classList.add('active');
  }

  function startAuto() {
    clearInterval(timer);
    timer = setInterval(() => goTo(current + 1), DELAY);
  }

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      goTo(parseInt(dot.dataset.slide));
      startAuto();
    });
  });

  if (prev) prev.addEventListener('click', () => { goTo(current - 1); startAuto(); });
  if (next) next.addEventListener('click', () => { goTo(current + 1); startAuto(); });

  // Pause on hover
  const hero = document.getElementById('hero');
  if (hero) {
    hero.addEventListener('mouseenter', () => clearInterval(timer));
    hero.addEventListener('mouseleave', startAuto);
  }

  // Touch / swipe support
  let touchStartX = 0;
  document.getElementById('hero')?.addEventListener('touchstart', e => {
    touchStartX = e.touches[0].clientX;
  }, { passive: true });
  document.getElementById('hero')?.addEventListener('touchend', e => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) { goTo(diff > 0 ? current + 1 : current - 1); startAuto(); }
  }, { passive: true });

  const elapsed = Date.now() - _initTime;
  setTimeout(() => { goTo(current + 1); startAuto(); }, Math.max(300, DELAY - elapsed));
})();
document.addEventListener('DOMContentLoaded', () => {
  applyTranslations();
  updateLangButtons();

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });
});
