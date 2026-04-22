import { useState } from "react";

const LOGO = "data:image/png;base64,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";


const NIGERIAN_STATES = ["Abia","Adamawa","Akwa Ibom","Anambra","Bauchi","Bayelsa","Benue","Borno","Cross River","Delta","Ebonyi","Edo","Ekiti","Enugu","FCT (Abuja)","Gombe","Imo","Jigawa","Kaduna","Kano","Katsina","Kebbi","Kogi","Kwara","Lagos","Nasarawa","Niger","Ogun","Ondo","Osun","Oyo","Plateau","Rivers","Sokoto","Taraba","Yobe","Zamfara"];

const PRODUCTS = [
  {id:1,  name:"Paracetamol 500mg",         category:"medications", price:850,   old:1200,  icon:"💊", rating:4.8, reviews:124, badge:"Best Seller", desc:"Fast-acting pain relief and fever reducer. Suitable for adults and children over 12 years."},
  {id:2,  name:"Amoxicillin 250mg Caps",    category:"medications", price:2400,  old:null,  icon:"💊", rating:4.7, reviews:89,  badge:null,          desc:"Broad-spectrum antibiotic for bacterial infections. Consult a pharmacist before use."},
  {id:3,  name:"Ibuprofen 400mg",           category:"medications", price:1100,  old:1400,  icon:"💊", rating:4.6, reviews:97,  badge:"Sale",         desc:"Anti-inflammatory pain relief for headaches, muscle pain and fever reduction."},
  {id:4,  name:"Metronidazole 200mg",       category:"medications", price:1600,  old:null,  icon:"💊", rating:4.5, reviews:63,  badge:null,           desc:"Antibiotic and antiparasitic medication. Effective against anaerobic bacteria."},
  {id:5,  name:"Nivea Nourishing Lotion",   category:"skincare",    price:3500,  old:4200,  icon:"🧴", rating:4.9, reviews:203, badge:"Top Rated",    desc:"Deep moisturizing body lotion enriched with almond oil for smooth, radiant skin."},
  {id:6,  name:"Neutrogena Face Wash",      category:"skincare",    price:4800,  old:null,  icon:"🧴", rating:4.7, reviews:156, badge:null,           desc:"Gentle oil-free acne-fighting face wash with salicylic acid for clearer skin."},
  {id:7,  name:"Olay Total Effects 7-in-1", category:"skincare",    price:7200,  old:8500,  icon:"✨", rating:4.8, reviews:89,  badge:"New",          desc:"7-in-1 moisturizer fighting the 7 signs of aging for youthful, radiant skin."},
  {id:8,  name:"Fair & White Cream",        category:"skincare",    price:2900,  old:3400,  icon:"✨", rating:4.5, reviews:112, badge:"Sale",         desc:"Brightening and moisturizing cream for an even, glowing complexion."},
  {id:9,  name:"Vitamin C 1000mg + Zinc",   category:"vitamins",    price:2800,  old:3500,  icon:"🌿", rating:4.9, reviews:312, badge:"Best Seller",  desc:"High-strength Vitamin C with Zinc for immune support and antioxidant protection."},
  {id:10, name:"Omega-3 Fish Oil 1000mg",   category:"vitamins",    price:4500,  old:null,  icon:"🌿", rating:4.8, reviews:178, badge:null,           desc:"Premium Omega-3 fatty acids for heart, brain and joint health."},
  {id:11, name:"Multivitamin Complete",     category:"vitamins",    price:3200,  old:3800,  icon:"🌿", rating:4.7, reviews:94,  badge:null,           desc:"Complete daily multivitamin formula with 20+ essential nutrients."},
  {id:12, name:"Zinc Supplement 50mg",      category:"vitamins",    price:1800,  old:null,  icon:"🌿", rating:4.6, reviews:76,  badge:null,           desc:"Essential zinc for immune function, wound healing and healthy skin."},
  {id:13, name:"Digital BP Monitor",        category:"equipment",   price:18500, old:22000, icon:"🩺", rating:4.9, reviews:67,  badge:"Premium",      desc:"Automatic arm blood pressure monitor with large LCD display and 60-reading memory."},
  {id:14, name:"Infrared Thermometer",      category:"equipment",   price:8500,  old:10000, icon:"🌡️", rating:4.7, reviews:145, badge:null,           desc:"Contactless forehead thermometer with instant accurate readings in 1 second."},
  {id:15, name:"Glucometer Kit",            category:"equipment",   price:12000, old:15000, icon:"🩺", rating:4.8, reviews:52,  badge:"Sale",         desc:"Complete blood glucose monitoring kit with 50 test strips and lancets included."},
  {id:16, name:"Stethoscope Classic",       category:"equipment",   price:9800,  old:null,  icon:"🩺", rating:4.6, reviews:38,  badge:null,           desc:"Professional dual-head stethoscope for home and clinical use."},
];

const BLOG_POSTS = [
  {id:1, title:"10 Essential Vitamins Every Nigerian Should Take Daily", category:"Health Tips", date:"April 12, 2026", icon:"🌿", excerpt:"Discover the key vitamins that support optimal health in Nigeria's unique climate and dietary conditions.", readTime:"5 min read", featured:true, body:"Nigeria's tropical climate means many Nigerians are deficient in critical vitamins. Vitamin D, despite abundant sunshine, is often surprisingly low due to skin pigmentation and indoor lifestyles.\n\nVitamin B12 is another critical one — if you eat mostly plant-based foods, you may not be getting enough. The consequences include fatigue, brain fog and nerve damage over time.\n\nVitamin C supports your immune system, especially important during the rainy season. Getting 500–1000mg daily gives your body the protection it needs.\n\nFolic acid is essential for women of childbearing age. Iron deficiency anaemia is very common among Nigerian women.\n\nZinc plays a powerful role in immunity, wound healing, and skin health. A simple daily supplement can make a noticeable difference.\n\nVisit LeeLee Medical Store for quality, authentic supplements at prices you can trust."},
  {id:2, title:"How to Build a Skincare Routine for Nigerian Weather", category:"Skincare", date:"April 8, 2026", icon:"✨", excerpt:"Beat the heat and humidity with expert-recommended skincare steps to keep your skin glowing all year round.", readTime:"4 min read", featured:false, body:"Port Harcourt's heat and humidity can be brutal on the skin. A simple 4-step routine is all you need.\n\nStep 1 — Cleanser: Use a gentle, non-stripping face wash twice a day.\n\nStep 2 — Toner: A toner with niacinamide helps control oil production and minimize pores.\n\nStep 3 — Moisturizer: Choose a lightweight, oil-free gel moisturizer even in hot weather.\n\nStep 4 — SPF: Use at least SPF 30 daily, even on cloudy days. This is the most important and most skipped step."},
  {id:3, title:"Understanding Blood Pressure: What Every Nigerian Must Know", category:"Medical", date:"April 3, 2026", icon:"🩺", excerpt:"Hypertension is a silent killer affecting millions of Nigerians. Learn how to monitor it at home.", readTime:"6 min read", featured:false, body:"High blood pressure affects roughly 1 in 3 Nigerian adults. Most people have no symptoms — which is why it is called the silent killer.\n\nNormal blood pressure is below 120/80 mmHg. If your reading is consistently 130/80 or higher, consult a doctor.\n\nMonitor at home with a digital BP monitor. The best time to measure is in the morning before medications.\n\nRisk factors include high salt intake, stress, obesity, family history, excessive alcohol, and physical inactivity.\n\nLifestyle changes that work: reduce salt, exercise 30 minutes 5 days a week, maintain a healthy weight, and quit smoking."},
  {id:4, title:"OTC Medications: What to Keep in Your Home First Aid Kit", category:"Medications", date:"March 28, 2026", icon:"💊", excerpt:"A complete guide to stocking your home pharmacy with the right essentials for common everyday ailments.", readTime:"7 min read", featured:false, body:"A well-stocked home first aid kit can be the difference between a minor inconvenience and a serious problem.\n\nPain and Fever: Paracetamol (500mg) and Ibuprofen (400mg). Keep both for different situations.\n\nORS Sachets: Oral Rehydration Salts are lifesaving for diarrhea, especially in children.\n\nWound Care: Antiseptic, sterile gauze, bandages, plasters, and tweezers.\n\nThermometer: An infrared thermometer lets you monitor fevers without contact.\n\nAntacid: For heartburn and indigestion. Magnesium trisilicate mixture is cheap and effective.\n\nCheck expiry dates every 6 months and store in a cool, dry place."},
];

const CATS = [
  {id:"all",         name:"All Products",          icon:"🏪"},
  {id:"medications", name:"Medications & OTC",      icon:"💊"},
  {id:"skincare",    name:"Skincare & Cosmetics",   icon:"✨"},
  {id:"vitamins",    name:"Vitamins & Supplements", icon:"🌿"},
  {id:"equipment",   name:"Medical Equipment",      icon:"🩺"},
];

const fmt = n => "₦" + n.toLocaleString();

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=DM+Sans:wght@300;400;500;600;700&display=swap');
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --g1:#0A4F24;--g2:#167A38;--g3:#5CB85C;--g4:#A8D5B5;
  --gp:#E8F5ED;--gu:#F2FAF5;--gold:#B8860B;--gold2:#D4AF37;--goldb:#FEF9EC;
  --bg:#FAFCFA;--td:#0D1B0F;--tm:#3A5240;--tl:#7A9080;
  --border:#D0E8D8;--r:12px;--rl:20px;
  --sh:0 4px 24px rgba(10,79,36,.08);--shl:0 16px 56px rgba(10,79,36,.16);
}
html{scroll-behavior:smooth}
body{font-family:'DM Sans',sans-serif;background:var(--bg);color:var(--td);overflow-x:hidden}
h1,h2,h3,h4{font-family:'Cormorant Garamond',serif}
button{cursor:pointer;font-family:'DM Sans',sans-serif}
input,textarea,select{font-family:'DM Sans',sans-serif}

/* NAV — Logo img: .nav-logo-img (width/height) | Brand name: .nav-bname (font-size) | Tagline: .nav-btag (font-size) */
.nav{position:sticky;top:0;z-index:1000;background:rgba(255,255,255,.97);backdrop-filter:blur(14px);border-bottom:1px solid var(--border);padding:0 48px;display:flex;align-items:center;justify-content:space-between;height:74px;gap:16px;box-shadow:0 2px 12px rgba(10,79,36,.06)}
.nav-logo{display:flex;align-items:center;gap:10px;cursor:pointer;flex-shrink:0}
.nav-logo-img{width:46px;height:46px;object-fit:contain;border-radius:50%;display:block}
.nav-logo-text{display:flex;flex-direction:column;justify-content:center}
.nav-bname{font-family:'Cormorant Garamond',serif;font-size:22px;font-weight:700;color:var(--g1);line-height:1.1}
.nav-btag{font-size:10px;color:var(--tl);letter-spacing:1.2px;text-transform:uppercase;margin-top:2px}
.nav-links{display:flex;gap:2px}
.nl{padding:8px 13px;font-size:13.5px;font-weight:500;color:var(--tm);border-radius:8px;cursor:pointer;transition:all .18s;white-space:nowrap}
.nl:hover,.nl.on{background:var(--gp);color:var(--g1);font-weight:600}
.nav-r{display:flex;align-items:center;gap:12px}
.search-box{display:flex;align-items:center;gap:8px;background:var(--gu);border:1.5px solid var(--border);border-radius:24px;padding:8px 16px}
.search-box input{background:none;border:none;outline:none;font-size:13px;color:var(--td);width:150px}
.cart-fab{position:relative;background:var(--g1);color:#fff;border:none;border-radius:50%;width:44px;height:44px;display:flex;align-items:center;justify-content:center;font-size:18px;transition:all .2s;box-shadow:0 2px 8px rgba(10,79,36,.3)}
.cart-fab:hover{background:var(--g2);transform:scale(1.06)}
.cbadge{position:absolute;top:-4px;right:-4px;background:var(--gold2);color:#fff;font-size:10px;font-weight:700;width:18px;height:18px;border-radius:50%;display:flex;align-items:center;justify-content:center}

.hero{background:linear-gradient(140deg,#082D16 0%,var(--g1) 40%,#1A7A38 100%);min-height:91vh;display:flex;align-items:center;padding:80px 48px;position:relative;overflow:hidden}
.hero::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 60% 60% at 70% 50%,rgba(92,184,92,.12) 0%,transparent 70%)}
.hero-wrap{max-width:1200px;margin:0 auto;width:100%;display:grid;grid-template-columns:1fr 420px;gap:60px;align-items:center;position:relative;z-index:1}
.h-pill{display:inline-flex;align-items:center;gap:8px;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.2);border-radius:24px;padding:6px 16px;font-size:11.5px;color:rgba(255,255,255,.85);letter-spacing:1.5px;text-transform:uppercase;margin-bottom:20px}
.h-title{font-size:clamp(40px,5vw,68px);font-weight:700;color:#fff;line-height:1.08;margin-bottom:20px}
.h-title em{font-style:italic;color:#A8D5B5}
.h-sub{font-size:17px;color:rgba(255,255,255,.72);line-height:1.75;margin-bottom:36px;font-weight:300;max-width:480px}
.h-btns{display:flex;gap:14px;flex-wrap:wrap}
.btn-w{background:#fff;color:var(--g1);padding:14px 30px;border-radius:32px;font-weight:700;font-size:14px;border:none;transition:all .22s;box-shadow:0 4px 16px rgba(0,0,0,.15);display:inline-flex;align-items:center;gap:8px;cursor:pointer}
.btn-w:hover{transform:translateY(-2px);box-shadow:0 8px 24px rgba(0,0,0,.22)}
.btn-ghost{background:transparent;color:#fff;padding:14px 30px;border-radius:32px;font-weight:500;font-size:14px;border:2px solid rgba(255,255,255,.35);transition:all .22s;display:inline-flex;align-items:center;gap:8px;cursor:pointer}
.btn-ghost:hover{background:rgba(255,255,255,.1);border-color:#fff}
.h-stats{display:flex;gap:36px;margin-top:48px;padding-top:32px;border-top:1px solid rgba(255,255,255,.15);flex-wrap:wrap}
.hs-num{font-family:'Cormorant Garamond',serif;font-size:34px;font-weight:700;color:#fff;line-height:1}
.hs-lbl{font-size:11.5px;color:rgba(255,255,255,.55);margin-top:4px}
.hero-cards{display:flex;flex-direction:column;gap:14px}
.hc{background:rgba(255,255,255,.09);backdrop-filter:blur(14px);border:1px solid rgba(255,255,255,.15);border-radius:var(--rl);padding:20px 24px;transition:transform .3s;cursor:pointer}
.hc:hover{transform:translateX(-5px)}
.hc-top{display:flex;align-items:center;gap:12px;margin-bottom:8px}
.hc-icon{font-size:28px}
.hc-name{font-size:14px;font-weight:600;color:#fff}
.hc-sub{font-size:12px;color:rgba(255,255,255,.55)}
.hc-price{font-family:'Cormorant Garamond',serif;font-size:26px;font-weight:700;color:#A8D5B5}

.tbar{background:var(--g1);padding:14px 48px;display:flex;justify-content:center;gap:48px;flex-wrap:wrap}
.ti{display:flex;align-items:center;gap:10px;color:rgba(255,255,255,.85);font-size:13px;font-weight:500}

.sec{padding:88px 48px}
.sec-in{max-width:1200px;margin:0 auto}
.stag{display:inline-block;background:var(--gp);color:var(--g1);font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;padding:6px 14px;border-radius:20px;margin-bottom:14px}
.stitle{font-size:clamp(32px,4vw,50px);font-weight:700;color:var(--td);line-height:1.12;margin-bottom:10px}
.ssub{font-size:16px;color:var(--tl);line-height:1.75;max-width:520px}
.sec-hd{display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:52px;gap:24px;flex-wrap:wrap}
.va{display:flex;align-items:center;gap:6px;color:var(--g1);font-weight:600;font-size:14px;cursor:pointer;border:2px solid var(--g1);padding:10px 22px;border-radius:24px;transition:all .2s;background:none}
.va:hover{background:var(--g1);color:#fff}

.cat-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:22px}
.cat-card{border-radius:var(--rl);padding:36px 24px 56px;cursor:pointer;transition:all .25s;border:1.5px solid transparent;position:relative;overflow:hidden}
.cat-card:hover{transform:translateY(-5px);box-shadow:var(--shl);border-color:var(--g3)}
.cc-icon{font-size:52px;display:block;margin-bottom:16px}
.cc-name{font-size:18px;font-weight:600;color:var(--td);margin-bottom:4px}
.cc-count{font-size:12px;color:var(--tl);margin-bottom:8px}
.cc-desc{font-size:13px;color:var(--tm)}
.cc-arr{position:absolute;bottom:20px;right:20px;width:38px;height:38px;background:var(--g1);color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:16px;transition:transform .2s}
.cat-card:hover .cc-arr{transform:scale(1.12)}

.pg{display:grid;grid-template-columns:repeat(4,1fr);gap:24px}
.pc{background:#fff;border-radius:var(--rl);overflow:hidden;border:1px solid var(--border);transition:all .25s;cursor:pointer;box-shadow:var(--sh)}
.pc:hover{transform:translateY(-7px);box-shadow:var(--shl);border-color:var(--g3)}
.pc-img{height:188px;background:var(--gp);display:flex;align-items:center;justify-content:center;font-size:68px;position:relative}
.pc-badge{position:absolute;top:12px;left:12px;color:#fff;font-size:10px;font-weight:700;padding:4px 10px;border-radius:12px}
.badge-green{background:var(--g1)}.badge-red{background:#D32F2F}.badge-gold{background:var(--gold)}.badge-blue{background:#1565C0}
.pc-body{padding:16px}
.pc-cat{font-size:11px;color:var(--g3);font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:6px}
.pc-name{font-size:15px;font-weight:600;color:var(--td);margin-bottom:8px;line-height:1.3}
.pc-rating{display:flex;align-items:center;gap:6px;margin-bottom:12px}
.stars{color:#FFC107;font-size:12px}
.rnum{font-size:12px;color:var(--tl)}
.pc-bottom{display:flex;align-items:center;justify-content:space-between;gap:8px}
.pc-price{font-family:'Cormorant Garamond',serif;font-size:22px;font-weight:700;color:var(--g1);white-space:nowrap}
.pc-old{font-size:12px;color:var(--tl);text-decoration:line-through;white-space:nowrap}
.atc{background:var(--g1);color:#fff;border:none;padding:9px 14px;border-radius:9px;font-size:13px;font-weight:600;transition:all .18s;white-space:nowrap;flex-shrink:0}
.atc:hover{background:var(--g2)}

.why-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:24px}
.why-card{text-align:center;padding:36px 20px;background:#fff;border-radius:var(--rl);border:1px solid var(--border);box-shadow:var(--sh);transition:transform .2s}
.why-card:hover{transform:translateY(-5px)}
.wi{font-size:46px;margin-bottom:16px}
.wt{font-size:18px;font-weight:700;color:var(--td);margin-bottom:8px}
.wd{font-size:13px;color:var(--tl);line-height:1.7}

.testim{background:var(--g1);padding:88px 48px}
.tg{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;max-width:1200px;margin:52px auto 0}
.tc{background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.15);border-radius:var(--rl);padding:30px}
.tc-stars{color:#FFD700;font-size:14px;margin-bottom:14px}
.tc-text{font-size:14px;color:rgba(255,255,255,.85);line-height:1.8;margin-bottom:20px;font-style:italic}
.tc-auth{display:flex;align-items:center;gap:12px}
.tc-av{width:42px;height:42px;background:var(--g2);border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;color:#fff;font-size:15px;flex-shrink:0}
.tc-name{font-weight:600;color:#fff;font-size:14px}
.tc-loc{font-size:12px;color:rgba(255,255,255,.5)}

.nl-sec{background:var(--goldb);padding:72px 48px;text-align:center}
.nl-t{font-size:clamp(28px,4vw,42px);font-weight:700;color:var(--td);margin-bottom:10px}
.nl-s{font-size:16px;color:var(--tl);margin-bottom:32px}
.nl-form{display:flex;max-width:480px;margin:0 auto;border-radius:32px;overflow:hidden;box-shadow:var(--shl)}
.nl-inp{flex:1;padding:16px 24px;border:none;font-size:14px;outline:none;min-width:0}
.nl-btn{background:var(--g1);color:#fff;border:none;padding:16px 28px;font-weight:700;font-size:14px;cursor:pointer;white-space:nowrap}
.nl-btn:hover{background:var(--g2)}

.ph{background:linear-gradient(135deg,var(--g1),#1A7A38);padding:64px 48px;text-align:center}
.ph h1{font-size:clamp(32px,4vw,52px);font-weight:700;color:#fff;margin-bottom:8px}
.ph p{font-size:16px;color:rgba(255,255,255,.7)}
.bc{display:flex;justify-content:center;align-items:center;gap:8px;margin-top:14px;font-size:13px;color:rgba(255,255,255,.55);flex-wrap:wrap}
.bc span{cursor:pointer}.bc span:hover{color:#fff}

.shop-wrap{max-width:1200px;margin:0 auto;padding:48px}
.shop-lay{display:grid;grid-template-columns:260px 1fr;gap:32px}
.sidebar{background:#fff;border-radius:var(--rl);padding:28px;border:1px solid var(--border);height:fit-content;position:sticky;top:88px;box-shadow:var(--sh)}
.sid-t{font-size:16px;font-weight:700;color:var(--td);margin-bottom:20px;padding-bottom:16px;border-bottom:1px solid var(--border)}
.fgrp{margin-bottom:24px}
.flbl{font-size:11.5px;font-weight:700;color:var(--tm);letter-spacing:1px;text-transform:uppercase;margin-bottom:12px;display:block}
.fopt{display:flex;align-items:center;gap:10px;padding:8px 0;cursor:pointer;color:var(--tm);font-size:14px;transition:color .15s}
.fopt:hover,.fopt.on{color:var(--g1);font-weight:600}
.fbox{width:18px;height:18px;border:2px solid var(--border);border-radius:4px;display:flex;align-items:center;justify-content:center;flex-shrink:0}
.fopt.on .fbox{background:var(--g1);border-color:var(--g1)}
.price-sl{width:100%;accent-color:var(--g1);margin-top:8px}
.price-ls{display:flex;justify-content:space-between;font-size:12px;color:var(--tm);margin-top:6px}
.shop-top{display:flex;justify-content:space-between;align-items:center;margin-bottom:28px;flex-wrap:wrap;gap:12px}
.res-count{font-size:14px;color:var(--tl)}
.sort-sel{padding:8px 14px;border:1.5px solid var(--border);border-radius:8px;font-size:13px;color:var(--tm);outline:none;background:#fff}

.pd-wrap{max-width:1200px;margin:0 auto;padding:48px}
.pd-lay{display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:start}
.pd-img{background:var(--gp);border-radius:var(--rl);height:480px;display:flex;align-items:center;justify-content:center;font-size:120px;border:1px solid var(--border);box-shadow:var(--sh)}
.pd-cat{font-size:12px;color:var(--g3);font-weight:700;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:10px}
.pd-name{font-size:40px;font-weight:700;color:var(--td);line-height:1.15;margin-bottom:12px}
.pd-stars{display:flex;align-items:center;gap:8px;margin-bottom:16px}
.pd-price{font-family:'Cormorant Garamond',serif;font-size:40px;font-weight:700;color:var(--g1);margin-bottom:6px}
.pd-old{font-size:18px;color:var(--tl);text-decoration:line-through;margin-bottom:20px}
.pd-desc{font-size:15px;color:var(--tm);line-height:1.85;margin-bottom:28px;padding:20px;background:var(--gu);border-radius:var(--r);border-left:3px solid var(--g3)}
.qty-row{display:flex;align-items:center;gap:16px;margin-bottom:24px}
.qty-lbl{font-size:13px;font-weight:600;color:var(--tm)}
.qty-ctrl{display:flex;align-items:center}
.qb{background:var(--gp);border:1.5px solid var(--border);width:40px;height:40px;font-size:18px;font-weight:700;color:var(--g1);transition:all .15s;display:flex;align-items:center;justify-content:center;cursor:pointer}
.qb:first-child{border-radius:8px 0 0 8px}.qb:last-child{border-radius:0 8px 8px 0}
.qb:hover{background:var(--g1);color:#fff;border-color:var(--g1)}
.qn{border:1.5px solid var(--border);border-left:none;border-right:none;width:52px;height:40px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:16px}
.atc-big{background:var(--g1);color:#fff;border:none;padding:16px 40px;border-radius:32px;font-size:15px;font-weight:700;transition:all .25s;box-shadow:0 4px 16px rgba(10,79,36,.3);display:flex;align-items:center;gap:10px;cursor:pointer}
.atc-big:hover{background:var(--g2);transform:translateY(-2px)}
.pd-meta{display:flex;gap:24px;margin-top:24px;padding-top:20px;border-top:1px solid var(--border);flex-wrap:wrap}
.pm-item{display:flex;align-items:center;gap:8px;font-size:13px;color:var(--tm)}

.cart-wrap{max-width:1000px;margin:0 auto;padding:48px}
.cart-lay{display:grid;grid-template-columns:1fr 340px;gap:28px}
.cart-list{background:#fff;border-radius:var(--rl);border:1px solid var(--border);overflow:hidden;box-shadow:var(--sh)}
.cart-hd{padding:20px 24px;border-bottom:1px solid var(--border);font-size:18px;font-weight:700;color:var(--td)}
.ci{display:grid;grid-template-columns:64px 1fr auto auto;align-items:center;gap:14px;padding:16px 20px;border-bottom:1px solid var(--border)}
.ci:last-child{border-bottom:none}
.ci-img{width:64px;height:64px;background:var(--gp);border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:28px;flex-shrink:0}
.ci-info{min-width:0}
.ci-name{font-size:14px;font-weight:600;color:var(--td);margin-bottom:3px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.ci-cat{font-size:11px;color:var(--tl);text-transform:uppercase;letter-spacing:1px;margin-bottom:8px}
.ci-qty{display:flex;align-items:center;flex-shrink:0}
.ci-qb{background:var(--gp);border:1.5px solid var(--border);width:28px;height:28px;font-size:16px;font-weight:700;color:var(--g1);display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .15s}
.ci-qb:first-child{border-radius:6px 0 0 6px}.ci-qb:last-child{border-radius:0 6px 6px 0}
.ci-qb:hover{background:var(--g1);color:#fff;border-color:var(--g1)}
.ci-qnum{border:1.5px solid var(--border);border-left:none;border-right:none;width:36px;height:28px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px}
.ci-price-col{text-align:right;flex-shrink:0;min-width:90px}
.ci-price{font-family:'Cormorant Garamond',serif;font-size:20px;color:var(--g1);font-weight:700;white-space:nowrap;display:block}
.ci-each{font-size:11px;color:var(--tl);white-space:nowrap;display:block}
.ci-rm{color:#D32F2F;cursor:pointer;font-size:16px;border:none;background:none;padding:4px;flex-shrink:0}
.cart-sum{background:#fff;border-radius:var(--rl);padding:28px;border:1px solid var(--border);height:fit-content;box-shadow:var(--sh);position:sticky;top:88px}
.sum-t{font-size:20px;font-weight:700;margin-bottom:20px;padding-bottom:16px;border-bottom:1px solid var(--border)}
.sum-row{display:flex;justify-content:space-between;font-size:14px;color:var(--tm);padding:8px 0;gap:8px}
.sum-row span:last-child{white-space:nowrap;font-weight:600}
.sum-tot{display:flex;justify-content:space-between;font-size:22px;font-weight:700;padding:16px 0;border-top:2px solid var(--border);margin-top:8px}
.co-btn{background:var(--g1);color:#fff;border:none;padding:16px;border-radius:32px;font-size:15px;font-weight:700;width:100%;margin-top:16px;cursor:pointer;box-shadow:0 4px 16px rgba(10,79,36,.3)}
.co-btn:hover{background:var(--g2)}
.empty{text-align:center;padding:88px 40px}
.empty-ico{font-size:80px;margin-bottom:20px}
.empty h2{font-size:28px;font-weight:700;margin-bottom:8px}
.empty p{font-size:15px;color:var(--tl);margin-bottom:32px}

.co-wrap{max-width:920px;margin:0 auto;padding:48px}
.co-lay{display:grid;grid-template-columns:1fr 1fr;gap:28px}
.co-sec{background:#fff;border-radius:var(--rl);padding:28px;border:1px solid var(--border);box-shadow:var(--sh)}
.co-sec-t{font-size:20px;font-weight:700;margin-bottom:20px;color:var(--td)}
.fg{margin-bottom:16px}
.flb{font-size:12px;font-weight:600;color:var(--tm);letter-spacing:.5px;margin-bottom:6px;display:block}
.fi{width:100%;padding:12px 16px;border:1.5px solid var(--border);border-radius:10px;font-size:14px;color:var(--td);outline:none;transition:border-color .15s;background:#fff}
.fi:focus{border-color:var(--g2)}
.pay-opt{display:flex;align-items:center;gap:12px;padding:14px 16px;border:2px solid var(--border);border-radius:10px;cursor:pointer;margin-bottom:10px;transition:all .15s}
.pay-opt.on{border-color:var(--g1);background:var(--gp)}
.pay-radio{width:18px;height:18px;border-radius:50%;border:2px solid var(--border);flex-shrink:0;transition:all .15s}
.pay-opt.on .pay-radio{border-color:var(--g1);background:var(--g1)}
.pay-name{font-weight:600;font-size:14px;color:var(--td)}
.pay-desc{font-size:12px;color:var(--tl);margin-top:2px}
.place-btn{background:var(--g1);color:#fff;border:none;padding:16px;border-radius:32px;font-size:15px;font-weight:700;width:100%;margin-top:16px;cursor:pointer;box-shadow:0 4px 16px rgba(10,79,36,.3)}
.place-btn:hover{background:var(--g2)}
.success-box{text-align:center;padding:48px 32px;max-width:480px;margin:0 auto}
.sico{font-size:68px;margin-bottom:16px}
.success-box h2{font-size:32px;font-weight:700;color:var(--g1);margin-bottom:8px}
.ord-id{background:var(--gp);border:1.5px solid var(--g3);border-radius:10px;padding:14px 20px;font-size:18px;font-weight:700;color:var(--g1);margin:20px 0;letter-spacing:1px}

.trk-wrap{max-width:680px;margin:0 auto;padding:48px}
.trk-box{background:#fff;border-radius:var(--rl);padding:36px;border:1px solid var(--border);box-shadow:var(--sh);margin-bottom:24px;text-align:center}
.trk-box h2{font-size:28px;font-weight:700;margin-bottom:8px}
.trk-box p{font-size:14px;color:var(--tl);margin-bottom:28px}
.trk-inp{display:flex;border-radius:32px;overflow:hidden;box-shadow:var(--sh);max-width:420px;margin:0 auto}
.trk-inp input{flex:1;padding:14px 20px;border:none;font-size:14px;outline:none;min-width:0}
.trk-inp button{background:var(--g1);color:#fff;border:none;padding:14px 24px;font-weight:700;font-size:14px;cursor:pointer;white-space:nowrap}
.trk-result{background:#fff;border-radius:var(--rl);padding:36px;border:1px solid var(--border);box-shadow:var(--sh)}
.trk-id{font-size:13px;color:var(--tl);margin-bottom:24px}
.steps{display:flex;flex-direction:column}
.step{display:flex;gap:20px}
.step-l{display:flex;flex-direction:column;align-items:center}
.step-dot{width:22px;height:22px;border-radius:50%;flex-shrink:0}
.step-dot.done{background:var(--g3);border:2px solid var(--g1)}.step-dot.pend{background:var(--border);border:2px solid var(--tl)}
.step-line{width:2px;flex:1;min-height:44px}
.step-line.done{background:var(--g3)}.step-line.pend{background:var(--border)}
.step-r{padding-bottom:32px}
.step-t{font-weight:600;font-size:15px;color:var(--td)}
.step-d{font-size:12px;color:var(--tl);margin-top:3px}

.abt-hero{background:linear-gradient(135deg,var(--g1),#1A8040);padding:108px 48px;text-align:center}
.abt-hero h1{font-size:clamp(36px,5vw,64px);font-weight:700;color:#fff;margin-bottom:12px}
.abt-story{max-width:1200px;margin:0 auto;padding:88px 48px;display:grid;grid-template-columns:1fr 1fr;gap:88px;align-items:center}
.abt-img{background:var(--gp);border-radius:var(--rl);height:460px;display:flex;align-items:center;justify-content:center;font-size:120px;border:1px solid var(--border);box-shadow:var(--shl)}
.abt-vals{background:var(--gp);padding:88px 48px}
.val-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;max-width:1200px;margin:52px auto 0}
.vc{background:#fff;border-radius:var(--rl);padding:36px 24px;border:1px solid var(--border);box-shadow:var(--sh);text-align:center;transition:transform .2s}
.vc:hover{transform:translateY(-5px)}
.vi{font-size:44px;margin-bottom:16px}.vt{font-size:20px;font-weight:700;color:var(--td);margin-bottom:8px}.vd{font-size:14px;color:var(--tl);line-height:1.75}
.team-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:28px;max-width:1200px;margin:0 auto;padding:88px 48px}
.tm-card{background:#fff;border-radius:var(--rl);overflow:hidden;border:1px solid var(--border);box-shadow:var(--sh);text-align:center;padding-bottom:28px}
.tm-img{height:180px;background:linear-gradient(135deg,var(--g1),var(--g3));display:flex;align-items:center;justify-content:center;font-size:72px;margin-bottom:20px}
.tm-name{font-size:20px;font-weight:700;color:var(--td);margin-bottom:4px}.tm-role{font-size:13px;color:var(--g2);font-weight:600}

.ct-wrap{max-width:1200px;margin:0 auto;padding:88px 48px;display:grid;grid-template-columns:1fr 1fr;gap:64px}
.ct-item{display:flex;gap:16px;align-items:flex-start;margin-bottom:32px}
.ct-ico{width:52px;height:52px;background:var(--gp);border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0;border:1px solid var(--border)}
.ct-label{font-size:12px;font-weight:700;color:var(--tl);letter-spacing:1px;text-transform:uppercase;margin-bottom:4px}
.ct-val{font-size:15px;font-weight:600;color:var(--td)}.ct-val2{font-size:14px;color:var(--tm);line-height:1.6}
.ct-form{background:#fff;border-radius:var(--rl);padding:40px;border:1px solid var(--border);box-shadow:var(--shl)}
.ct-form h2{font-size:28px;font-weight:700;margin-bottom:8px}
.ct-form p{font-size:14px;color:var(--tl);margin-bottom:28px}
textarea.fi{height:120px;resize:vertical}
.send-btn{background:var(--g1);color:#fff;border:none;padding:14px 36px;border-radius:32px;font-size:14px;font-weight:700;cursor:pointer;box-shadow:0 4px 16px rgba(10,79,36,.3)}
.send-btn:hover{background:var(--g2)}

.blog-wrap{max-width:1200px;margin:0 auto;padding:48px}
.blog-feat{background:#fff;border-radius:var(--rl);overflow:hidden;border:1px solid var(--border);box-shadow:var(--shl);cursor:pointer;transition:all .25s;display:grid;grid-template-columns:1fr 1fr;margin-bottom:40px}
.blog-feat:hover{transform:translateY(-4px);box-shadow:0 24px 64px rgba(10,79,36,.2)}
.bf-img{background:linear-gradient(135deg,var(--g1),#1A8040);display:flex;align-items:center;justify-content:center;font-size:90px}
.bf-body{padding:40px}
.blog-tag{font-size:11px;font-weight:700;color:var(--g3);letter-spacing:1px;text-transform:uppercase;margin-bottom:10px}
.blog-title{font-size:24px;font-weight:700;color:var(--td);margin-bottom:12px;line-height:1.3}
.blog-exc{font-size:14px;color:var(--tl);line-height:1.7;margin-bottom:16px}
.blog-meta{display:flex;gap:16px;font-size:12px;color:var(--tl)}
.blog-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:28px}
.bc-card{background:#fff;border-radius:var(--rl);overflow:hidden;border:1px solid var(--border);box-shadow:var(--sh);cursor:pointer;transition:all .25s}
.bc-card:hover{transform:translateY(-6px);box-shadow:var(--shl)}
.bc-img{height:180px;background:var(--gp);display:flex;align-items:center;justify-content:center;font-size:62px}
.bc-body{padding:20px}
.post-wrap{max-width:780px;margin:0 auto;padding:48px}
.post-icon{font-size:80px;text-align:center;margin-bottom:28px}
.post-cat{font-size:11px;font-weight:700;color:var(--g3);letter-spacing:1.5px;text-transform:uppercase;margin-bottom:12px;text-align:center}
.post-title{font-size:clamp(28px,4vw,46px);font-weight:700;color:var(--td);line-height:1.15;margin-bottom:16px;text-align:center}
.post-meta{display:flex;justify-content:center;gap:20px;font-size:13px;color:var(--tl);margin-bottom:40px;flex-wrap:wrap}
.post-body{font-size:16px;line-height:1.9;color:var(--tm)}
.post-body p{margin-bottom:20px}

.footer{background:#082D16;color:rgba(255,255,255,.8);padding:72px 48px 28px}
.ft-grid{display:grid;grid-template-columns:1.5fr 1fr 1fr 1fr;gap:52px;max-width:1200px;margin:0 auto 52px}
.ft-logo-img{width:38px;height:38px;object-fit:contain;border-radius:50%;background:rgba(92,184,92,.15)}
.ft-bname{font-family:'Cormorant Garamond',serif;font-size:26px;font-weight:700;color:#fff;margin-bottom:4px}
.ft-btag{font-size:11px;color:var(--g4);letter-spacing:1.2px;margin-bottom:16px}
.ft-about{font-size:13px;line-height:1.85;color:rgba(255,255,255,.6)}
.ft-colt{font-size:12.5px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#fff;margin-bottom:20px}
.fl{display:block;font-size:13px;color:rgba(255,255,255,.6);margin-bottom:11px;cursor:pointer;transition:color .15s}
.fl:hover{color:var(--g4)}
.socials{display:flex;gap:10px;margin-top:20px}
.sb{width:38px;height:38px;background:rgba(255,255,255,.08);border-radius:8px;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:16px;transition:background .15s}
.sb:hover{background:var(--g2)}
.ft-bot{max-width:1200px;margin:0 auto;padding-top:24px;border-top:1px solid rgba(255,255,255,.1);display:flex;justify-content:space-between;font-size:12px;color:rgba(255,255,255,.35);flex-wrap:wrap;gap:12px}

.toast{position:fixed;bottom:32px;left:50%;transform:translateX(-50%);background:var(--g1);color:#fff;padding:14px 28px;border-radius:32px;font-weight:600;font-size:14px;z-index:9999;box-shadow:0 8px 32px rgba(0,0,0,.2);pointer-events:none;white-space:nowrap}

@media(max-width:1024px){
  .cat-grid,.why-grid{grid-template-columns:repeat(2,1fr)}
  .pg{grid-template-columns:repeat(3,1fr)}
  .hero-wrap{grid-template-columns:1fr}.hero-cards{display:none}
  .blog-feat{grid-template-columns:1fr}.bf-img{height:220px}
  .ft-grid{grid-template-columns:1fr 1fr;gap:36px}
  .tg{grid-template-columns:1fr}.team-grid{grid-template-columns:1fr 1fr}
}
@media(max-width:768px){
  .nav{padding:0 16px;height:64px}.nav-links,.search-box{display:none}
  .sec,.testim,.nl-sec,.abt-vals{padding:60px 20px}
  .ph,.abt-hero{padding:48px 20px}
  .pg{grid-template-columns:repeat(2,1fr)}
  .shop-lay{grid-template-columns:1fr}.sidebar{display:none}
  .pd-lay{grid-template-columns:1fr;gap:28px}.pd-wrap{padding:20px}
  .cart-lay,.co-lay{grid-template-columns:1fr}
  .cart-wrap,.co-wrap,.trk-wrap{padding:20px}
  .ci{grid-template-columns:52px 1fr auto auto;gap:10px;padding:12px 14px}
  .ci-img{width:52px;height:52px;font-size:22px}
  .ci-price{font-size:17px}.ci-price-col{min-width:80px}
  .abt-story{grid-template-columns:1fr;gap:40px;padding:48px 20px}
  .ct-wrap{grid-template-columns:1fr;padding:48px 20px}
  .blog-grid{grid-template-columns:1fr}.blog-wrap,.post-wrap{padding:20px}
  .ft-grid{grid-template-columns:1fr}.ft-bot{flex-direction:column;text-align:center}
  .val-grid,.tg{grid-template-columns:1fr}
  .tbar{padding:12px 16px;gap:16px}
  .hero{padding:60px 20px;min-height:auto}
  .h-stats{gap:20px}
  .shop-wrap{padding:20px}
  .team-grid{grid-template-columns:1fr;padding:48px 20px}
}
`;

const Stars = ({n=5}) => <span className="stars">{"★".repeat(Math.round(n))}{"☆".repeat(5-Math.round(n))}</span>;
const badgeClass = b => { if(!b) return ""; if(b==="Sale") return "badge-red"; if(b==="New") return "badge-gold"; if(b==="Premium") return "badge-blue"; return "badge-green"; };

const ProductCard = ({p, navigate, addToCart}) => (
  <div className="pc" onClick={() => navigate("product", {product:p})}>
    <div className="pc-img">
      {p.badge && <span className={`pc-badge ${badgeClass(p.badge)}`}>{p.badge}</span>}
      {p.icon}
    </div>
    <div className="pc-body">
      <div className="pc-cat">{p.category}</div>
      <div className="pc-name">{p.name}</div>
      <div className="pc-rating"><Stars n={p.rating}/><span className="rnum">({p.reviews})</span></div>
      <div className="pc-bottom">
        <div>
          <div className="pc-price">{fmt(p.price)}</div>
          {p.old && <div className="pc-old">{fmt(p.old)}</div>}
        </div>
        <button className="atc" onClick={e => { e.stopPropagation(); addToCart(p); }}>+ Cart</button>
      </div>
    </div>
  </div>
);

const Navbar = ({page, navigate, cartCount, search, setSearch}) => (
  <nav className="nav">
    <div className="nav-logo" onClick={() => navigate("home")}>
      <img src={LOGO} className="nav-logo-img" alt="LeeLee Logo" />
      <div className="nav-logo-text">
        <div className="nav-bname">LeeLee</div>
        <div className="nav-btag">Your Health, Our Aim</div>
      </div>
    </div>
    <div className="nav-links">
      {[["home","Home"],["shop","Shop"],["about","About Us"],["blog","Blog"],["tracking","Track Order"],["contact","Contact"]].map(([p,l]) => (
        <div key={p} className={`nl ${page===p?"on":""}`} onClick={() => navigate(p)}>{l}</div>
      ))}
    </div>
    <div className="nav-r">
      <div className="search-box">
        <span>🔍</span>
        <input placeholder="Search products…" value={search} onChange={e => setSearch(e.target.value)} onKeyDown={e => e.key==="Enter" && navigate("shop")} />
      </div>
      <button className="cart-fab" onClick={() => navigate("cart")}>
        🛒{cartCount > 0 && <span className="cbadge">{cartCount}</span>}
      </button>
    </div>
  </nav>
);

const HomePage = ({navigate, addToCart, goShopCat}) => {
  const featured = [
    ...PRODUCTS.filter(p => p.category==="medications").slice(0,2),
    ...PRODUCTS.filter(p => p.category==="skincare").slice(0,2),
    ...PRODUCTS.filter(p => p.category==="vitamins").slice(0,2),
    ...PRODUCTS.filter(p => p.category==="equipment").slice(0,2),
  ];
  return (
    <>
      <section className="hero">
        <div className="hero-wrap">
          <div>
            <div className="h-pill">🏅 Trusted Pharmacy & Cosmetics</div>
            <h1 className="h-title">Your Health Is Our<br/><em>Top Priority</em></h1>
            <p className="h-sub">Authentic medications, premium skincare, and medical equipment — delivered to your door anywhere in Nigeria. Quality you can trust, prices you will love.</p>
            <div className="h-btns">
              <button className="btn-w" onClick={() => goShopCat("all")}>Shop Now →</button>
              <button className="btn-ghost" onClick={() => navigate("about")}>Learn About Us</button>
            </div>
            <div className="h-stats">
              {[["5,000+","Happy Customers"],["1,200+","Products Available"],["100%","Authentic Medications"],["1-3","Days Delivery"]].map(([n,l]) => (
                <div key={l}><div className="hs-num">{n}</div><div className="hs-lbl">{l}</div></div>
              ))}
            </div>
          </div>
          <div className="hero-cards">
            {[{ico:"💊",name:"Paracetamol 500mg",sub:"Pain Relief",price:"₦850",cat:"medications"},{ico:"🧴",name:"Nivea Body Lotion",sub:"Skincare",price:"₦3,500",cat:"skincare"},{ico:"🩺",name:"Digital BP Monitor",sub:"Medical Equipment",price:"₦18,500",cat:"equipment"}].map(h => (
              <div className="hc" key={h.name} onClick={() => goShopCat(h.cat)}>
                <div className="hc-top"><span className="hc-icon">{h.ico}</span><div><div className="hc-name">{h.name}</div><div className="hc-sub">{h.sub}</div></div></div>
                <div className="hc-price">{h.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="tbar">
        {[["✅","100% authentic products"],["💊","Licensed pharmacy"],["🔒","Secure checkout"],["📞","24/7 support"]].map(([i,t]) => (
          <div className="ti" key={t}><span>{i}</span><span>{t}</span></div>
        ))}
      </div>
      <section className="sec" style={{background:"#fff"}}>
        <div className="sec-in">
          <div className="sec-hd">
            <div><div className="stag">Browse By Category</div><h2 className="stitle">What Are You Looking For?</h2></div>
            <button className="va" onClick={() => goShopCat("all")}>All Products →</button>
          </div>
          <div className="cat-grid">
            {[{id:"medications",bg:"#E8F5ED",icon:"💊",name:"Medications & OTC",count:"4 Products",desc:"Trusted pharmaceutical products"},
              {id:"skincare",bg:"#FFF8E7",icon:"✨",name:"Skincare & Cosmetics",count:"4 Products",desc:"Glow inside and out"},
              {id:"vitamins",bg:"#F0FBF2",icon:"🌿",name:"Vitamins & Supplements",count:"4 Products",desc:"Boost your wellness"},
              {id:"equipment",bg:"#EEF4FF",icon:"🩺",name:"Medical Equipment",count:"4 Products",desc:"Professional-grade devices"}].map(c => (
              <div className="cat-card" key={c.id} style={{background:c.bg}} onClick={() => goShopCat(c.id)}>
                <span className="cc-icon">{c.icon}</span>
                <div className="cc-name">{c.name}</div>
                <div className="cc-count">{c.count}</div>
                <div className="cc-desc">{c.desc}</div>
                <div className="cc-arr">→</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="sec">
        <div className="sec-in">
          <div className="sec-hd">
            <div><div className="stag">Featured Products</div><h2 className="stitle">Best Sellers & Top Picks</h2></div>
            <button className="va" onClick={() => goShopCat("all")}>View All →</button>
          </div>
          <div className="pg">{featured.map(p => <ProductCard key={p.id} p={p} navigate={navigate} addToCart={addToCart}/>)}</div>
        </div>
      </section>
      <section className="sec" style={{background:"var(--gu)"}}>
        <div className="sec-in">
          <div className="sec-hd"><div><div className="stag">Why Choose LeeLee</div><h2 className="stitle">We Go Beyond Just Selling</h2></div></div>
          <div className="why-grid">
            {[{i:"🏅",t:"100% Authentic",d:"Every product is verified from certified manufacturers and licensed distributors only."},
              {i:"🚚",t:"Nationwide Delivery",d:"We deliver to all 36 states in Nigeria. Doorstep delivery in Port Harcourt in 24 hours."},
              {i:"💊",t:"Licensed Pharmacists",d:"Our qualified pharmacists review every order for safety and appropriateness."},
              {i:"💬",t:"Expert Support",d:"Have a health question? Our team is available to guide you 7 days a week."}].map(w => (
              <div className="why-card" key={w.t}><div className="wi">{w.i}</div><div className="wt">{w.t}</div><p className="wd">{w.d}</p></div>
            ))}
          </div>
        </div>
      </section>
      <section className="testim">
        <div style={{maxWidth:1200,margin:"0 auto"}}>
          <div style={{textAlign:"center"}}>
            <div className="stag" style={{background:"rgba(255,255,255,.15)",color:"#A8D5B5"}}>Testimonials</div>
            <h2 className="stitle" style={{color:"#fff",marginTop:8}}>What Our Customers Say</h2>
          </div>
          <div className="tg">
            {[{av:"C",name:"Chinyere O.",loc:"Port Harcourt",text:"Ordered vitamins and they arrived the next day! Products were genuine. I have tried fake supplements before — these are the real deal."},
              {av:"E",name:"Emeka B.",loc:"Lagos",text:"Finally found a pharmacy online I can trust. Ordered a glucometer and received it with warranty. Price was better than the market too."},
              {av:"A",name:"Amina D.",loc:"Abuja",text:"The skincare products were exactly as described. My skin has improved so much. Customer service responded within minutes. Will order again!"}].map(t => (
              <div className="tc" key={t.name}>
                <div className="tc-stars">★★★★★</div>
                <p className="tc-text">"{t.text}"</p>
                <div className="tc-auth"><div className="tc-av">{t.av}</div><div><div className="tc-name">{t.name}</div><div className="tc-loc">{t.loc}</div></div></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="nl-sec">
        <div className="stag">Stay Informed</div>
        <h2 className="nl-t">Get Health Tips & Exclusive Deals</h2>
        <p className="nl-s">Subscribe — no spam, just valuable health content and special offers.</p>
        <div className="nl-form">
          <input className="nl-inp" placeholder="Enter your email address…" type="email"/>
          <button className="nl-btn">Subscribe →</button>
        </div>
      </section>
    </>
  );
};

const ShopPage = ({navigate, addToCart, products, activeCat, setActiveCat, maxPrice, setMaxPrice, search}) => {
  const [sort, setSort] = useState("default");
  const sorted = [...products].sort((a,b) => {
    if(sort==="priceasc") return a.price-b.price;
    if(sort==="pricedesc") return b.price-a.price;
    if(sort==="rating") return b.rating-a.rating;
    return 0;
  });
  return (
    <>
      <div className="ph">
        <h1>Our Shop</h1>
        <p>Authentic health and beauty products for every Nigerian</p>
        <div className="bc"><span onClick={() => navigate("home")}>Home</span><span>/</span><span>Shop</span></div>
      </div>
      <div className="shop-wrap">
        <div className="shop-lay">
          <div className="sidebar">
            <div className="sid-t">🔍 Filter Products</div>
            <div className="fgrp">
              <div className="flbl">Category</div>
              {CATS.map(c => (
                <div key={c.id} className={`fopt ${activeCat===c.id?"on":""}`} onClick={() => setActiveCat(c.id)}>
                  <div className="fbox">{activeCat===c.id && <span style={{color:"#fff",fontSize:12}}>✓</span>}</div>
                  {c.icon} {c.name}
                </div>
              ))}
            </div>
            <div className="fgrp">
              <label className="flbl">Max Price</label>
              <input type="range" className="price-sl" min={500} max={25000} step={500} value={maxPrice} onChange={e => setMaxPrice(+e.target.value)}/>
              <div className="price-ls"><span>₦500</span><span style={{color:"var(--g1)",fontWeight:700}}>₦{maxPrice.toLocaleString()}</span></div>
            </div>
          </div>
          <div>
            <div className="shop-top">
              <span className="res-count">{sorted.length} product{sorted.length!==1?"s":""} found{search ? ` for "${search}"` : activeCat!=="all" ? ` in ${activeCat}` : ""}</span>
              <select className="sort-sel" value={sort} onChange={e => setSort(e.target.value)}>
                <option value="default">Sort: Default</option>
                <option value="priceasc">Price: Low to High</option>
                <option value="pricedesc">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
            {sorted.length === 0
              ? <div className="empty"><div className="empty-ico">🔍</div><h2>No products found</h2><p>Try adjusting your filters.</p><button className="btn-w" style={{background:"var(--g1)",color:"#fff",border:"none"}} onClick={() => setActiveCat("all")}>Clear Filters</button></div>
              : <div className="pg">{sorted.map(p => <ProductCard key={p.id} p={p} navigate={navigate} addToCart={addToCart}/>)}</div>
            }
          </div>
        </div>
      </div>
    </>
  );
};

const ProductPage = ({p, navigate, addToCart, qty, setQty, goShopCat}) => {
  const related = PRODUCTS.filter(x => x.category===p.category && x.id!==p.id);
  return (
    <>
      <div className="ph">
        <div className="bc">
          <span onClick={() => navigate("home")}>Home</span><span>/</span>
          <span onClick={() => goShopCat(p.category)}>{p.category}</span><span>/</span>
          <span>{p.name}</span>
        </div>
      </div>
      <div className="pd-wrap">
        <div className="pd-lay">
          <div className="pd-img">{p.icon}</div>
          <div>
            <div className="pd-cat">{p.category}</div>
            <h1 className="pd-name">{p.name}</h1>
            <div className="pd-stars"><Stars n={p.rating}/><span style={{fontSize:13,color:"var(--tl)",marginLeft:6}}>({p.reviews} reviews)</span></div>
            <div className="pd-price">{fmt(p.price)}</div>
            {p.old && <div className="pd-old">{fmt(p.old)} <span style={{background:"#FFEBEE",color:"#D32F2F",fontSize:11,fontWeight:700,padding:"2px 8px",borderRadius:10,marginLeft:6}}>{Math.round((1-p.price/p.old)*100)}% OFF</span></div>}
            <div className="pd-desc">{p.desc}</div>
            <div className="qty-row">
              <span className="qty-lbl">Quantity:</span>
              <div className="qty-ctrl">
                <button className="qb" onClick={() => setQty(Math.max(1,qty-1))}>−</button>
                <div className="qn">{qty}</div>
                <button className="qb" onClick={() => setQty(qty+1)}>+</button>
              </div>
            </div>
            <div style={{display:"flex",gap:14,flexWrap:"wrap"}}>
              <button className="atc-big" onClick={() => { for(let i=0;i<qty;i++) addToCart(p); navigate("cart"); }}>🛒 Add to Cart</button>
              <button style={{background:"var(--gp)",color:"var(--g1)",border:"2px solid var(--g1)",padding:"14px 24px",borderRadius:32,fontWeight:700,fontSize:14,cursor:"pointer"}} onClick={() => goShopCat(p.category)}>← Back to {p.category}</button>
            </div>
            <div className="pd-meta">
              {[["✅","Authentic Product"],["🚚","Fast Delivery"],["🔄","Easy Returns"],["🔒","Secure Payment"]].map(([i,t]) => (
                <div className="pm-item" key={t}><span>{i}</span><span>{t}</span></div>
              ))}
            </div>
          </div>
        </div>
        {related.length > 0 && (
          <div style={{marginTop:64}}>
            <h2 className="stitle" style={{marginBottom:28}}>More in {p.category.charAt(0).toUpperCase()+p.category.slice(1)}</h2>
            <div className="pg">{related.slice(0,4).map(x => <ProductCard key={x.id} p={x} navigate={navigate} addToCart={addToCart}/>)}</div>
          </div>
        )}
      </div>
    </>
  );
};

const CartPage = ({cart, removeFromCart, updateQty, cartTotal, navigate}) => (
  <>
    <div className="ph"><h1>Your Cart</h1><p>{cart.length} item{cart.length!==1?"s":""} in your cart</p></div>
    <div className="cart-wrap">
      {cart.length === 0
        ? <div className="empty"><div className="empty-ico">🛒</div><h2>Your Cart is Empty</h2><p>You have not added anything yet.</p><button className="btn-w" style={{background:"var(--g1)",color:"#fff",border:"none"}} onClick={() => navigate("shop")}>Start Shopping →</button></div>
        : <div className="cart-lay">
            <div className="cart-list">
              <div className="cart-hd">Shopping Cart ({cart.length} items)</div>
              {cart.map(i => (
                <div className="ci" key={i.id}>
                  <div className="ci-img">{i.icon}</div>
                  <div className="ci-info">
                    <div className="ci-name">{i.name}</div>
                    <div className="ci-cat">{i.category}</div>
                  </div>
                  <div className="ci-qty">
                    <button className="ci-qb" onClick={() => updateQty(i.id, i.qty-1)}>−</button>
                    <div className="ci-qnum">{i.qty}</div>
                    <button className="ci-qb" onClick={() => updateQty(i.id, i.qty+1)}>+</button>
                  </div>
                  <div className="ci-price-col">
                    <span className="ci-price">{fmt(i.price*i.qty)}</span>
                    <span className="ci-each">{fmt(i.price)} each</span>
                  </div>
                  <button className="ci-rm" onClick={() => removeFromCart(i.id)}>✕</button>
                </div>
              ))}
            </div>
            <div className="cart-sum">
              <div className="sum-t">Order Summary</div>
              <div className="sum-row"><span>Subtotal ({cart.reduce((s,i)=>s+i.qty,0)} items)</span><span>{fmt(cartTotal)}</span></div>
              <div className="sum-row"><span>Delivery Fee</span><span style={{color:cartTotal>=10000?"var(--g3)":"inherit"}}>{cartTotal>=10000?"FREE":fmt(1500)}</span></div>
              {cartTotal < 10000 && <div style={{fontSize:12,color:"var(--g2)",background:"var(--gp)",borderRadius:8,padding:"8px 12px",marginTop:4}}>Add {fmt(10000-cartTotal)} more for free delivery!</div>}
              <div className="sum-tot"><span>Total</span><span style={{color:"var(--g1)"}}>{fmt(cartTotal+(cartTotal<10000?1500:0))}</span></div>
              <button className="co-btn" onClick={() => navigate("checkout")}>Proceed to Checkout →</button>
              <button style={{background:"none",border:"none",color:"var(--g1)",fontWeight:600,fontSize:14,cursor:"pointer",width:"100%",marginTop:12}} onClick={() => navigate("shop")}>← Continue Shopping</button>
            </div>
          </div>
      }
    </div>
  </>
);

const CheckoutPage = ({cart, cartTotal, navigate, payment, setPayment, orderNum, orderPlaced, setOrderPlaced}) => (
  <>
    <div className="ph"><h1>Checkout</h1><p>Complete your order securely</p></div>
    <div className="co-wrap">
      {orderPlaced
        ? <div style={{background:"#fff",borderRadius:"var(--rl)",border:"1px solid var(--border)",boxShadow:"var(--shl)",padding:"20px 0"}}>
            <div className="success-box">
              <div className="sico">🎉</div>
              <h2>Order Placed Successfully!</h2>
              <p>Thank you for shopping with LeeLee Medical Store. Your order has been received and is being processed.</p>
              <div className="ord-id">Order ID: {orderNum}</div>
              <p style={{fontSize:13,color:"var(--tl)"}}>A confirmation message will be sent shortly. Use your Order ID to track delivery.</p>
              <div style={{display:"flex",gap:12,justifyContent:"center",marginTop:24,flexWrap:"wrap"}}>
                <button className="btn-w" style={{background:"var(--g1)",color:"#fff",border:"none"}} onClick={() => navigate("tracking")}>Track My Order →</button>
                <button className="btn-w" style={{border:"2px solid var(--g1)",color:"var(--g1)"}} onClick={() => navigate("shop")}>Continue Shopping</button>
              </div>
            </div>
          </div>
        : <div className="co-lay">
            <div style={{display:"flex",flexDirection:"column",gap:20}}>
              <div className="co-sec">
                <div className="co-sec-t">📦 Delivery Information</div>
                {[["Full Name","text","Your full name"],["Phone Number","tel","+234 800 000 0000"],["Email Address","email","your@email.com"]].map(([l,t,ph]) => (
                  <div className="fg" key={l}><label className="flb">{l}</label><input className="fi" type={t} placeholder={ph}/></div>
                ))}
                <div className="fg">
                  <label className="flb">Delivery State</label>
                  <select className="fi">
                    <option value="">-- Select your state --</option>
                    {NIGERIAN_STATES.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div className="fg"><label className="flb">Delivery Address</label><input className="fi" placeholder="House no., street, area…"/></div>
                <div className="fg">
                  <label className="flb">Delivery Method</label>
                  {[["🚚 Nationwide Delivery","3–5 business days · ₦1,500 (FREE above ₦10k)"],["🏪 Store Pickup","Pick up from our Port Harcourt store · FREE"]].map(([n,d]) => (
                    <div key={n} style={{display:"flex",alignItems:"center",gap:12,padding:"12px 16px",border:"2px solid var(--border)",borderRadius:10,cursor:"pointer",marginBottom:8,background:"var(--gu)"}}>
                      <div style={{width:18,height:18,borderRadius:"50%",border:"2px solid var(--g1)",flexShrink:0}}/>
                      <div><div style={{fontWeight:600,fontSize:14}}>{n}</div><div style={{fontSize:12,color:"var(--tl)"}}>{d}</div></div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="co-sec">
                <div className="co-sec-t">💳 Payment Method</div>
                {[["paystack","💳 Paystack","Pay securely with card or bank transfer"],["flutterwave","🌊 Flutterwave","Card, USSD, bank transfer options"],["bank","🏦 Bank Transfer","Transfer directly to our account. Confirmed on receipt."]].map(([id,n,d]) => (
                  <div key={id} className={`pay-opt ${payment===id?"on":""}`} onClick={() => setPayment(id)}>
                    <div className="pay-radio"/>
                    <div><div className="pay-name">{n}</div><div className="pay-desc">{d}</div></div>
                  </div>
                ))}
                {payment==="bank" && (
                  <div style={{background:"var(--gp)",border:"1px solid var(--g3)",borderRadius:10,padding:16,marginTop:8,fontSize:13,lineHeight:1.8}}>
                    <strong>Bank Details:</strong><br/>Bank: First Bank of Nigeria<br/>Account Name: LeeLee Medical Store<br/>Account Number: 3012345678
                  </div>
                )}
              </div>
            </div>
            <div className="cart-sum">
              <div className="sum-t">Order Summary</div>
              {cart.map(i => <div className="sum-row" key={i.id}><span style={{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",maxWidth:"56%"}}>{i.name} ×{i.qty}</span><span>{fmt(i.price*i.qty)}</span></div>)}
              <div className="sum-row"><span>Delivery</span><span>{cartTotal>=10000?"FREE":fmt(1500)}</span></div>
              <div className="sum-tot"><span>Total</span><span style={{color:"var(--g1)"}}>{fmt(cartTotal+(cartTotal<10000?1500:0))}</span></div>
              <button className="place-btn" onClick={() => setOrderPlaced(true)}>✅ Place Order Now</button>
              <p style={{fontSize:11,color:"var(--tl)",textAlign:"center",marginTop:12}}>🔒 Your information is encrypted and secure</p>
            </div>
          </div>
      }
    </div>
  </>
);

const TrackingPage = () => {
  const [val, setVal] = useState("");
  const [result, setResult] = useState(null);
  return (
    <>
      <div className="ph"><h1>Track Your Order</h1><p>Enter your Order ID to check delivery status</p></div>
      <div className="trk-wrap">
        <div className="trk-box">
          <h2>Where is My Order?</h2>
          <p>Your Order ID was sent to your email and WhatsApp after placing your order.</p>
          <div className="trk-inp">
            <input placeholder="Enter Order ID e.g. LL-12345" value={val} onChange={e => setVal(e.target.value)} onKeyDown={e => e.key==="Enter" && val.trim() && setResult(val.trim().toUpperCase())}/>
            <button onClick={() => val.trim() && setResult(val.trim().toUpperCase())}>Track →</button>
          </div>
        </div>
        {result && (
          <div className="trk-result">
            <h3 style={{marginBottom:4,fontSize:22}}>Order Status</h3>
            <div className="trk-id">Order ID: {result}</div>
            <div className="steps">
              {[{t:"Order Confirmed",d:"Your order was received and confirmed",done:true},
                {t:"Pharmacy Verified",d:"Products verified and picked by our pharmacist",done:true},
                {t:"Packaged & Ready",d:"Your order has been packaged for dispatch",done:true},
                {t:"Out for Delivery",d:"Estimated delivery: 1–3 business days",done:false},
                {t:"Delivered",d:"Package delivered to your address",done:false}].map((s,i,arr) => (
                <div className="step" key={s.t}>
                  <div className="step-l">
                    <div className={`step-dot ${s.done?"done":"pend"}`}/>
                    {i<arr.length-1 && <div className={`step-line ${s.done?"done":"pend"}`}/>}
                  </div>
                  <div className="step-r">
                    <div className="step-t" style={{color:s.done?"var(--g1)":"var(--tl)"}}>{s.done?"✅ ":""}{s.t}</div>
                    <div className="step-d">{s.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

const AboutPage = ({navigate}) => (
  <>
    <div className="abt-hero">
      <div className="stag" style={{background:"rgba(255,255,255,.15)",color:"#A8D5B5",marginBottom:16}}>Our Story</div>
      <h1>We Exist to Make Healthcare Accessible</h1>
      <p style={{marginTop:16,fontSize:17,color:"rgba(255,255,255,.75)",maxWidth:560,margin:"16px auto 0",lineHeight:1.8}}>LeeLee Medical Store was founded with one mission: to ensure every Nigerian has access to authentic, affordable healthcare products.</p>
    </div>
    <div className="abt-story">
      <div className="abt-img">🏥</div>
      <div>
        <div className="stag">Who We Are</div>
        <h2 className="stitle">More Than Just a Pharmacy</h2>
        <p style={{fontSize:16,color:"var(--tm)",lineHeight:1.85,marginBottom:20}}>LeeLee Medical Store & Cosmetics is a licensed pharmaceutical retailer and cosmetics supplier based in Port Harcourt, Rivers State. Our tagline — <em style={{color:"var(--g1)",fontWeight:600}}>Your Health, Our Aim</em> — drives every decision we make.</p>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16}}>
          {[["5,000+","Customers served"],["1,200+","Products in stock"],["100%","Authentic products"],["2026","Year established"]].map(([n,l]) => (
            <div key={l} style={{background:"var(--gp)",borderRadius:12,padding:"16px 20px",border:"1px solid var(--border)"}}>
              <div style={{fontFamily:"Cormorant Garamond, serif",fontSize:28,fontWeight:700,color:"var(--g1)"}}>{n}</div>
              <div style={{fontSize:13,color:"var(--tl)"}}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="abt-vals">
      <div style={{maxWidth:1200,margin:"0 auto",textAlign:"center"}}>
        <div className="stag">Our Values</div><h2 className="stitle">What We Stand For</h2>
      </div>
      <div className="val-grid">
        {[["🏅","Authenticity","We only stock products from verified, certified manufacturers. No counterfeits — ever."],
          ["❤️","Patient-First","Every product and recommendation starts with one question: is this good for the customer?"],
          ["🔬","Quality Assurance","Our pharmacists review all products before listing."],
          ["💰","Fair Pricing","Great healthcare should not cost a fortune."],
          ["🚀","Fast Fulfillment","We process and dispatch orders the same day they are placed."],
          ["🤝","Community","We support health education and awareness in Rivers State."]].map(([i,t,d]) => (
          <div className="vc" key={t}><div className="vi">{i}</div><div className="vt">{t}</div><p className="vd">{d}</p></div>
        ))}
      </div>
    </div>
    <div>
      <div style={{textAlign:"center",padding:"64px 48px 0"}}><div className="stag">Meet the Team</div><h2 className="stitle">The People Behind LeeLee</h2></div>
      <div className="team-grid">
        {[["👩‍⚕️","Dr. Lilian A.","Chief Pharmacist & Founder"],["👨‍💼","Emmanuel O.","Operations Manager"],["👩‍🔬","Blessing N.","Quality Assurance Lead"]].map(([i,n,r]) => (
          <div className="tm-card" key={n}><div className="tm-img">{i}</div><div className="tm-name">{n}</div><div className="tm-role">{r}</div></div>
        ))}
      </div>
    </div>
    <section style={{background:"var(--g1)",padding:"72px 48px",textAlign:"center"}}>
      <h2 style={{fontFamily:"Cormorant Garamond,serif",fontSize:40,fontWeight:700,color:"#fff",marginBottom:12}}>Ready to Shop with Us?</h2>
      <p style={{fontSize:16,color:"rgba(255,255,255,.72)",marginBottom:28,maxWidth:480,margin:"0 auto 28px"}}>Browse over 1,200 authentic products and get fast, reliable delivery nationwide.</p>
      <button className="btn-w" onClick={() => navigate("shop")}>Shop Now →</button>
    </section>
  </>
);

const ContactPage = () => {
  const [sent, setSent] = useState(false);
  return (
    <>
      <div className="ph"><h1>Contact Us</h1><p>We are here to help — reach out any time</p></div>
      <div className="ct-wrap">
        <div>
          <div className="stag">Get in Touch</div>
          <h2 className="stitle" style={{marginBottom:12}}>How Can We Help You?</h2>
          <p style={{fontSize:15,color:"var(--tl)",lineHeight:1.75,marginBottom:40}}>Whether you have a question about a product, need a pharmacist consultation, or want to track an order — we are ready to assist.</p>
          {[{i:"📍",l:"Store Location",v:"Port Harcourt, Rivers State, Nigeria",v2:"(Full address coming soon)"},
            {i:"📞",l:"Phone / WhatsApp",v:"+234 800 000 0000",v2:"Monday–Saturday, 8am–8pm"},
            {i:"📧",l:"Email",v:"hello@leeleemedical.com",v2:"We respond within 24 hours"},
            {i:"🕐",l:"Business Hours",v:"Monday–Saturday: 8am–8pm",v2:"Sunday: 10am–4pm"}].map(c => (
            <div className="ct-item" key={c.l}>
              <div className="ct-ico">{c.i}</div>
              <div><div className="ct-label">{c.l}</div><div className="ct-val">{c.v}</div><div className="ct-val2">{c.v2}</div></div>
            </div>
          ))}
          <div style={{background:"var(--gp)",borderRadius:"var(--rl)",padding:24,border:"1px solid var(--border)"}}>
            <div style={{fontWeight:700,marginBottom:8,fontSize:16}}>🟢 WhatsApp Order Line</div>
            <div style={{fontSize:14,color:"var(--tm)",lineHeight:1.7}}>For quick orders, product enquiries, or prescription uploads — message us on WhatsApp. We respond within 15 minutes during business hours.</div>
            <button style={{marginTop:16,background:"#25D366",color:"#fff",border:"none",padding:"10px 24px",borderRadius:24,fontWeight:700,fontSize:14,cursor:"pointer"}}>💬 Chat on WhatsApp</button>
          </div>
        </div>
        <div className="ct-form">
          {sent
            ? <div style={{textAlign:"center",padding:"40px 0"}}>
                <div style={{fontSize:64,marginBottom:16}}>✅</div>
                <h2>Message Sent!</h2>
                <p style={{fontSize:15,color:"var(--tl)",marginTop:8,lineHeight:1.7}}>A member of our team will get back to you within 24 hours.</p>
                <button style={{marginTop:24,background:"var(--g1)",color:"#fff",border:"none",padding:"12px 28px",borderRadius:24,fontWeight:700,cursor:"pointer"}} onClick={() => setSent(false)}>Send Another →</button>
              </div>
            : <>
                <h2>Send Us a Message</h2>
                <p>We will respond within 24 hours.</p>
                {[["Full Name","text","Your full name"],["Email Address","email","your@email.com"],["Phone Number","tel","+234…"]].map(([l,t,ph]) => (
                  <div className="fg" key={l}><label className="flb">{l}</label><input className="fi" type={t} placeholder={ph}/></div>
                ))}
                <div className="fg"><label className="flb">Subject</label>
                  <select className="fi"><option>Product Enquiry</option><option>Order Issue</option><option>Prescription Upload</option><option>Delivery Tracking</option><option>Other</option></select>
                </div>
                <div className="fg"><label className="flb">Message</label><textarea className="fi" style={{height:120,resize:"vertical"}} placeholder="How can we help you?"/></div>
                <button className="send-btn" onClick={() => setSent(true)}>Send Message →</button>
              </>
          }
        </div>
      </div>
    </>
  );
};

const BlogPage = ({navigate}) => {
  const featured = BLOG_POSTS.find(p => p.featured);
  const rest = BLOG_POSTS.filter(p => !p.featured);
  return (
    <>
      <div className="ph"><h1>Health & Wellness Blog</h1><p>Expert advice and health tips from our pharmacists</p></div>
      <div className="blog-wrap">
        {featured && (
          <div className="blog-feat" onClick={() => navigate("post", {post:featured})}>
            <div className="bf-img">{featured.icon}</div>
            <div className="bf-body">
              <div className="blog-tag">⭐ Featured · {featured.category}</div>
              <h2 className="blog-title">{featured.title}</h2>
              <p className="blog-exc">{featured.excerpt}</p>
              <div className="blog-meta"><span>📅 {featured.date}</span><span>⏱ {featured.readTime}</span></div>
              <div style={{marginTop:16,color:"var(--g1)",fontWeight:700,fontSize:14}}>Read Full Article →</div>
            </div>
          </div>
        )}
        <div style={{marginBottom:24}}><div className="stag">Latest Articles</div></div>
        <div className="blog-grid">
          {rest.map(p => (
            <div className="bc-card" key={p.id} onClick={() => navigate("post", {post:p})}>
              <div className="bc-img">{p.icon}</div>
              <div className="bc-body">
                <div className="blog-tag">{p.category}</div>
                <div className="blog-title" style={{fontSize:17}}>{p.title}</div>
                <p className="blog-exc">{p.excerpt}</p>
                <div className="blog-meta"><span>📅 {p.date}</span><span>⏱ {p.readTime}</span></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const PostPage = ({post, navigate}) => (
  <>
    <div className="ph">
      <div className="bc"><span onClick={() => navigate("home")}>Home</span><span>/</span><span onClick={() => navigate("blog")}>Blog</span><span>/</span><span>{post.category}</span></div>
    </div>
    <div className="post-wrap">
      <div className="post-icon">{post.icon}</div>
      <div className="post-cat">{post.category}</div>
      <h1 className="post-title">{post.title}</h1>
      <div className="post-meta"><span>📅 {post.date}</span><span>⏱ {post.readTime}</span></div>
      <div className="post-body">{post.body.split("\n\n").map((para,i) => <p key={i}>{para}</p>)}</div>
      <div style={{marginTop:40,padding:24,background:"var(--gp)",borderRadius:"var(--rl)",border:"1px solid var(--border)"}}>
        <div style={{fontWeight:700,fontSize:16,color:"var(--g1)",marginBottom:8}}>💊 Need any of the products mentioned?</div>
        <p style={{fontSize:14,color:"var(--tm)",marginBottom:16}}>Find authentic vitamins, medications, skincare, and medical equipment at LeeLee Medical Store.</p>
        <button className="btn-w" style={{background:"var(--g1)",color:"#fff",border:"none"}} onClick={() => navigate("shop")}>Shop Now →</button>
      </div>
      <button style={{marginTop:28,background:"none",border:"none",color:"var(--g1)",fontWeight:600,fontSize:14,cursor:"pointer"}} onClick={() => navigate("blog")}>← Back to Blog</button>
    </div>
  </>
);

const Footer = ({navigate}) => (
  <footer className="footer">
    <div className="ft-grid">
      <div>
        <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:12}}>
          <img src={LOGO} className="ft-logo-img" alt="LeeLee Logo"/>
          <div><div className="ft-bname">LeeLee</div><div className="ft-btag">Your Health, Our Aim</div></div>
        </div>
        <p className="ft-about">Port Harcourt's trusted licensed pharmacy and cosmetics store. Authentic products, fast nationwide delivery, and expert pharmacist support — all in one place.</p>
        <div className="socials">{["📘","📸","🐦","▶️"].map((s,i) => <div key={i} className="sb">{s}</div>)}</div>
      </div>
      <div>
        <div className="ft-colt">Quick Links</div>
        {[["home","Home"],["shop","Shop"],["about","About Us"],["blog","Blog"],["contact","Contact"],["tracking","Track Order"]].map(([p,l]) => (
          <span key={p} className="fl" onClick={() => navigate(p)}>{l}</span>
        ))}
      </div>
      <div>
        <div className="ft-colt">Categories</div>
        {["Medications & OTC","Skincare & Cosmetics","Vitamins & Supplements","Medical Equipment"].map(c => (
          <span key={c} className="fl" onClick={() => navigate("shop")}>{c}</span>
        ))}
      </div>
      <div>
        <div className="ft-colt">Contact</div>
        <span className="fl">📍 Port Harcourt, Rivers State</span>
        <span className="fl">📞 +234 800 000 0000</span>
        <span className="fl">📧 hello@leeleemedical.com</span>
        <span className="fl">🕐 Mon–Sat: 8am–8pm</span>
        <div style={{marginTop:20,padding:"12px 16px",background:"rgba(92,184,92,.12)",borderRadius:10,border:"1px solid rgba(92,184,92,.2)"}}>
          <div style={{fontSize:12,fontWeight:700,color:"#A8D5B5",letterSpacing:1}}>LICENSED PHARMACY</div>
          <div style={{fontSize:12,color:"rgba(255,255,255,.55)",marginTop:2}}>Reg. No: PCN/PH/0000</div>
        </div>
      </div>
    </div>
    <div className="ft-bot">
      <span>© 2026 LeeLee Medical Store & Cosmetics. All rights reserved.</span>
      <span>Privacy Policy · Terms · Return Policy</span>
    </div>
  </footer>
);

export default function App() {
  const [page, setPage] = useState("home");
  const [cart, setCart] = useState([]);
  const [product, setProduct] = useState(null);
  const [post, setPost] = useState(null);
  const [activeCat, setActiveCat] = useState("all");
  const [maxPrice, setMaxPrice] = useState(25000);
  const [payment, setPayment] = useState("paystack");
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [qty, setQty] = useState(1);
  const [search, setSearch] = useState("");
  const [toast, setToast] = useState("");
  const [orderNum] = useState("LL-" + Math.floor(10000+Math.random()*90000));

  const showToast = msg => { setToast(msg); setTimeout(() => setToast(""), 2800); };

  const navigate = (p, extra={}) => {
    if(extra.product) { setProduct(extra.product); setQty(1); }
    if(extra.post) setPost(extra.post);
    setPage(p);
    window.scrollTo({top:0, behavior:"smooth"});
  };

  const goShopCat = catId => { setActiveCat(catId); setSearch(""); navigate("shop"); };

  const addToCart = p => {
    setCart(prev => {
      const ex = prev.find(i => i.id===p.id);
      if(ex) return prev.map(i => i.id===p.id ? {...i, qty:i.qty+1} : i);
      return [...prev, {...p, qty:1}];
    });
    showToast(p.name + " added to cart ✅");
  };

  const removeFromCart = id => setCart(prev => prev.filter(i => i.id!==id));
  const updateQty = (id, v) => { if(v<1) return removeFromCart(id); setCart(prev => prev.map(i => i.id===id ? {...i,qty:v} : i)); };
  const cartTotal = cart.reduce((s,i) => s+i.price*i.qty, 0);
  const cartCount = cart.reduce((s,i) => s+i.qty, 0);

  const filtered = PRODUCTS.filter(p => {
    const cat = activeCat==="all" || p.category===activeCat;
    const price = p.price <= maxPrice;
    const srch = !search || p.name.toLowerCase().includes(search.toLowerCase()) || p.category.toLowerCase().includes(search.toLowerCase());
    return cat && price && srch;
  });

  return (
    <>
      <style>{CSS}</style>
      {toast && <div className="toast">{toast}</div>}
      <Navbar page={page} navigate={navigate} cartCount={cartCount} search={search} setSearch={setSearch}/>
      {page==="home"     && <HomePage navigate={navigate} addToCart={addToCart} goShopCat={goShopCat}/>}
      {page==="shop"     && <ShopPage navigate={navigate} addToCart={addToCart} products={filtered} activeCat={activeCat} setActiveCat={setActiveCat} maxPrice={maxPrice} setMaxPrice={setMaxPrice} search={search}/>}
      {page==="product"  && product && <ProductPage p={product} navigate={navigate} addToCart={addToCart} qty={qty} setQty={setQty} goShopCat={goShopCat}/>}
      {page==="cart"     && <CartPage cart={cart} removeFromCart={removeFromCart} updateQty={updateQty} cartTotal={cartTotal} navigate={navigate}/>}
      {page==="checkout" && <CheckoutPage cart={cart} cartTotal={cartTotal} navigate={navigate} payment={payment} setPayment={setPayment} orderNum={orderNum} orderPlaced={orderPlaced} setOrderPlaced={setOrderPlaced}/>}
      {page==="tracking" && <TrackingPage/>}
      {page==="about"    && <AboutPage navigate={navigate}/>}
      {page==="contact"  && <ContactPage/>}
      {page==="blog"     && <BlogPage navigate={navigate}/>}
      {page==="post"     && post && <PostPage post={post} navigate={navigate}/>}
      <Footer navigate={navigate}/>
    </>
  );
}
