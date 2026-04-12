/* =========================================
   SolNat - Main JavaScript
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
    hero_title:     'Energia solar <em>neta i eficient</em> per a la teva llar',
    hero_desc:      'Instal·lació, neteja, manteniment i monitoratge de plaques solars a Catalunya. Maximitza el rendiment de la teva inversió solar.',
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
    about_title:   'Experts en energia solar a Catalunya des del 2013',
    about_desc1:   'A SolNat combinem tecnologia puntera amb un profund compromís amb el medi ambient. Oferim solucions solars integrals adaptades a cada client, des de cases unifamiliars fins a grans instal·lacions comercials.',
    about_desc2:   'Treballem amb equips d\'alta qualitat i tècniques respectuoses amb l\'entorn, garantint el màxim rendiment de cada instal·lació.',
    about_f1_title:'Neteja amb Aigua Delcalcificada',
    about_f1_desc: 'Usem aigua delcalcificada, sense productes químics. Zero residus, zero ratllades.',
    about_f2_title:'Instal·lació Certificada',
    about_f2_desc: 'Tots els tècnics estan acreditats per la Generalitat de Catalunya.',
    about_f3_title:'Revisió Anual del Estat',
    about_f3_desc: 'Inspecció anual completa per assegurar el perfecte funcionament de la teva instal·lació solar.',
    about_badge:   'anys d\'experiència',
    about_btn:     'Coneix-nos millor',

    // Services
    srv_label:   'Serveis',
    srv_title:   'Tot el que necessites per al teu sistema solar',
    srv_desc:    'Oferim una gama completa de serveis, des de la primera instal·lació fins al manteniment preventiu i la neteja professional.',
    srv1_title:  'Instal·lació Residencial',
    srv1_desc:   'Dissenyem i instal·lem sistemes solars a mida per a cases i xalets, amb estudi de viabilitat gratuït.',
    srv1_link:   'Saber més →',
    srv2_title:  'Instal·lació Comercial',
    srv2_desc:   'Solucions per a empreses, naus industrials i comunitats. Màxim estalvi energètic i retorn ràpid de la inversió.',
    srv2_link:   'Saber més →',
    srv3_title:  'Neteja Professional',
    srv3_desc:   'Neteja amb aigua desionitzada que elimina brutícia, pol·len i deposicions, recuperant fins al 30% del rendiment perdut.',
    srv3_link:   'Saber més →',
    srv4_title:  'Manteniment Preventiu',
    srv4_desc:   'Revisions periòdiques per garantir el màxim rendiment i detectar qualsevol anomalia a temps.',
    srv4_link:   'Saber més →',
    srv5_title:  'Monitoratge Intel·ligent',
    srv5_desc:   'Sistemes de control en temps real que t\'avisen si el rendiment baixa i t\'envien informes mensuals.',
    srv5_link:   'Saber més →',
    srv6_title:  'Assessoria i Subvencions',
    srv6_desc:   'T\'ajudem a sol·licitar les ajudes i subvencions disponibles per a instal·lacions solars a Catalunya.',
    srv6_link:   'Saber més →',

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
    why_label: 'Per què SolNat',
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
    blog_label:  'Blog',
    blog_title:  'Consells i novetats solar',
    blog_all:    'Veure tots els articles',
    blog1_tag:   'Manteniment',
    blog1_title: 'Per què netejar les plaques cada any: l\'impacte real en el rendiment',
    blog1_desc:  'Estudis mostren que les plaques netes produeixen fins al 30% més d\'energia. Descobreix quan i com fer-ho bé.',
    blog2_tag:   'Subvencions',
    blog2_title: 'Guia completa d\'ajudes solars a Catalunya per al 2025',
    blog2_desc:  'IDAE, PREE, MOVES III i bonificacions municipals: totes les opcions per finançar la teva instal·lació.',
    blog3_tag:   'Tecnologia',
    blog3_title: 'Panells bifacials: val la pena la inversió extra?',
    blog3_desc:  'Analitzem els avantatges dels panells bifacials i en quines situacions compensa el sobrecost.',
    blog_date1:  '12 mar 2025',
    blog_date2:  '28 feb 2025',
    blog_date3:  '14 feb 2025',

    // Contact
    contact_label:    'Contacte',
    contact_title:    'Parlem del teu projecte solar',
    contact_desc:     'Ompliu el formulari i us contactarem en menys de 24 hores amb un pressupost personalitzat i sense compromís.',
    contact_phone:    '+34 93 XXX XX XX',
    contact_email:    'hola@solnat.cat',
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
    form_ok_desc:     'Us contactarem en menys de 24 hores. Gràcies per confiar en SolNat.',

    // Footer
    footer_desc:     'Experts en energia solar a Catalunya. Instal·lació, neteja i manteniment professional.',
    footer_nav:      'Navegació',
    footer_services: 'Serveis',
    footer_contact:  'Contacte',
    footer_newsletter_title: 'Butlletí',
    footer_newsletter_placeholder: 'El teu email',
    footer_newsletter_btn: 'Subscriure\'m',
    footer_copy:    '© 2026 SolNat. Tots els drets reservats.',
    footer_privacy: 'Política de privacitat',
    footer_terms:   'Avís legal',
    footer_cookies: 'Cookies',

    // Jobs
    jobs_nav:            'Treballa amb nosaltres',
    jobs_label:          'Uneix-te a l\'equip',
    jobs_title:          'Treballa amb nosaltres',
    jobs_intro:          'A SolNat busquem persones responsables, compromeses i amb ganes de treballar en el sector de la neteja i manteniment de plaques solars per a particulars i empreses.',
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
    hero_title:     'Energía solar <em>limpia y eficiente</em> para tu hogar',
    hero_desc:      'Instalación, limpieza, mantenimiento y monitorización de paneles solares en Cataluña. Maximiza el rendimiento de tu inversión solar.',
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
    about_title:   'Expertos en energía solar en Cataluña desde 2013',
    about_desc1:   'En SolNat combinamos tecnología punta con un profundo compromiso con el medio ambiente. Ofrecemos soluciones solares integrales adaptadas a cada cliente, desde casas unifamiliares hasta grandes instalaciones comerciales.',
    about_desc2:   'Trabajamos con equipos de alta calidad y técnicas respetuosas con el entorno, garantizando el máximo rendimiento de cada instalación.',
    about_f1_title:'Limpieza con Agua Descalcificada',
    about_f1_desc: 'Usamos agua descalcificada, sin productos químicos.',
    about_f2_title:'Instalación Certificada',
    about_f2_desc: 'Todos los técnicos están acreditados por la Generalitat de Catalunya.',
    about_f3_title:'Revisión Anual del Estado',
    about_f3_desc: 'Inspección anual completa para asegurar el perfecto funcionamiento de tu instalación solar.',
    about_badge:   'años de experiencia',
    about_btn:     'Conócenos mejor',

    // Services
    srv_label:   'Servicios',
    srv_title:   'Todo lo que necesitas para tu sistema solar',
    srv_desc:    'Ofrecemos una gama completa de servicios, desde la primera instalación hasta el mantenimiento preventivo y la limpieza profesional.',
    srv1_title:  'Instalación Residencial',
    srv1_desc:   'Diseñamos e instalamos sistemas solares a medida para casas y chalets, con estudio de viabilidad gratuito.',
    srv1_link:   'Saber más →',
    srv2_title:  'Instalación Comercial',
    srv2_desc:   'Soluciones para empresas, naves industriales y comunidades. Máximo ahorro energético y rápido retorno de la inversión.',
    srv2_link:   'Saber más →',
    srv3_title:  'Limpieza Profesional',
    srv3_desc:   'Limpieza con agua desionizada que elimina suciedad, polen y excrementos, recuperando hasta el 30% del rendimiento perdido.',
    srv3_link:   'Saber más →',
    srv4_title:  'Mantenimiento Preventivo',
    srv4_desc:   'Revisiones periódicas para garantizar el máximo rendimiento y detectar cualquier anomalía a tiempo.',
    srv4_link:   'Saber más →',
    srv5_title:  'Monitorización Inteligente',
    srv5_desc:   'Sistemas de control en tiempo real que te avisan si el rendimiento baja y te envían informes mensuales.',
    srv5_link:   'Saber más →',
    srv6_title:  'Asesoría y Subvenciones',
    srv6_desc:   'Te ayudamos a solicitar las ayudas y subvenciones disponibles para instalaciones solares en Cataluña.',
    srv6_link:   'Saber más →',

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
    why_label: 'Por qué SolNat',
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
    blog_label:  'Blog',
    blog_title:  'Consejos y novedades solar',
    blog_all:    'Ver todos los artículos',
    blog1_tag:   'Mantenimiento',
    blog1_title: 'Por qué limpiar los paneles cada año: el impacto real en el rendimiento',
    blog1_desc:  'Estudios muestran que los paneles limpios producen hasta un 30% más de energía. Descubre cuándo y cómo hacerlo bien.',
    blog2_tag:   'Subvenciones',
    blog2_title: 'Guía completa de ayudas solares en Cataluña para 2025',
    blog2_desc:  'IDAE, PREE, MOVES III y bonificaciones municipales: todas las opciones para financiar tu instalación.',
    blog3_tag:   'Tecnología',
    blog3_title: 'Paneles bifaciales: ¿vale la pena la inversión extra?',
    blog3_desc:  'Analizamos las ventajas de los paneles bifaciales y en qué situaciones compensa el sobrecoste.',
    blog_date1:  '12 mar 2025',
    blog_date2:  '28 feb 2025',
    blog_date3:  '14 feb 2025',

    // Contact
    contact_label:    'Contacto',
    contact_title:    'Hablemos de tu proyecto solar',
    contact_desc:     'Rellena el formulario y te contactaremos en menos de 24 horas con un presupuesto personalizado y sin compromiso.',
    contact_phone:    '+34 93 XXX XX XX',
    contact_email:    'hola@solnat.cat',
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
    form_ok_desc:     'Te contactaremos en menos de 24 horas. Gracias por confiar en SolNat.',

    // Footer
    footer_desc:     'Expertos en energía solar en Cataluña. Instalación, limpieza y mantenimiento profesional.',
    footer_nav:      'Navegación',
    footer_services: 'Servicios',
    footer_contact:  'Contacto',
    footer_newsletter_title: 'Boletín',
    footer_newsletter_placeholder: 'Tu email',
    footer_newsletter_btn: 'Suscribirme',
    footer_copy:    '© 2026 SolNat. Todos los derechos reservados.',
    footer_privacy: 'Política de privacidad',
    footer_terms:   'Aviso legal',
    footer_cookies: 'Cookies',

    // Jobs
    jobs_nav:            'Trabaja con nosotros',
    jobs_label:          'Únete al equipo',
    jobs_title:          'Trabaja con nosotros',
    jobs_intro:          'En SolNat buscamos personas responsables, comprometidas y con ganas de trabajar en el sector de la limpieza y mantenimiento de paneles solares para particulares y empresas.',
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
let currentLang = localStorage.getItem('solnat-lang') || 'ca';

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('solnat-lang', lang);
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
  const slides = document.querySelectorAll('.hero-slide');
  const dots   = document.querySelectorAll('.slide-dot');
  const prev   = document.querySelector('.slide-prev');
  const next   = document.querySelector('.slide-next');
  if (!slides.length) return;

  let current   = 0;
  let timer     = null;
  const DELAY   = 5000; // ms between slides

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

  startAuto();
})();
document.addEventListener('DOMContentLoaded', () => {
  applyTranslations();
  updateLangButtons();

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });
});
