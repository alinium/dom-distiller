function k5(a){var b,c;b=yH(a.b.ld(Buc),148);if(b==null){c=oH(g0,tmc,1,[Cuc,Duc,Euc,Fuc]);a.b.nd(Buc,c);return c}else{return b}}
function l5(a){var b,c;b=yH(a.b.ld(Guc),148);if(b==null){c=oH(g0,tmc,1,[Huc,Iuc,Juc,Kuc,Luc,Muc]);a.b.nd(Guc,c);return c}else{return b}}
function Ssb(a){var b,c,d,e,f,g,i;i=new u4b;r4b(i,new XQb('<b>Select your favorite color:<\/b>'));c=k5(a.b);for(d=0;d<c.length;++d){b=c[d];e=new q$b(wrc,b);MMb(e,'cwRadioButton-color-'+b);d==2&&(e.d.disabled=true,Ri(e,Zi(e.db)+Lrc,true));r4b(i,e)}r4b(i,new XQb('<br><b>Select your favorite sport:<\/b>'));g=l5(a.b);for(d=0;d<g.length;++d){f=g[d];e=new q$b('sport',f);MMb(e,'cwRadioButton-sport-'+Gcc(f,$nc,Ooc));d==2&&NMb(e,(cbc(),cbc(),bbc));r4b(i,e)}return i}
var Buc='cwRadioButtonColors',Guc='cwRadioButtonSports';i1(786,1,gnc);_.mc=function Ysb(){N3(this.c,Ssb(this.b))};Vnc(wn)(1);