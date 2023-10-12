import{_ as s,r as o,o as h,c,a as e,d as l,b as t,w as n,e as r}from"./app-77ed2457.js";const u={},_={id:"🚑-medic",tabindex:"-1"},p=e("a",{class:"header-anchor",href:"#🚑-medic","aria-hidden":"true"},"#",-1),m=e("b",null,"Medic",-1),f=e("hr",null,null,-1),g=e("br",null,null,-1),M=r("<li>Max <ul><li>Set the Maximum amount of Medics that can be in a match</li></ul></li><li>Who can see the shield <ul><li>Nothing - No one can see the shield</li><li>Medic+Shielded - The Medic AND the Shielded player can see the shield</li><li>Medic - Only the Medic can see the shield</li><li>Shielded - Only the Shielded player can see the shield</li></ul></li><li>Who can see kill attempt <ul><li>Nothing - No one can see the kill attempt</li><li>Medic+Shielded - The Medic AND the Shielded player can see the kill attempt</li><li>Medic - Only the Medic can see the kill attempt</li><li>Shielded - Only the Shielded player can see the kill attempt</li></ul></li>",3),w=e("li",null,"Immediately - the Shield will disappear immediately when the Medic dies",-1),S=e("li",null,"After Meeting - the Shield will disappear after the next Meeting",-1),b=e("li",null,[l("On kill attempt, reset murderer's cooldown to "),e("ul",null,[e("li",null,"Set the kill cooldown after the shield is attempted to be broken")])],-1),y={class:"custom-container tip"},k=e("p",{class:"custom-container-title"},"Did You Know?",-1),v={href:"https://github.com/KARPED1EM",target:"_blank",rel:"noopener noreferrer"},x={href:"https://github.com/Tommy-XL",target:"_blank",rel:"noopener noreferrer"};function N(O,T){const i=o("font"),a=o("Badge"),d=o("ExternalLinkIcon");return h(),c("div",null,[e("h1",_,[p,l(),t(i,{color:"#00ff97"},{default:n(()=>[l("🚑 "),m]),_:1}),l(),t(a,{text:"Support",type:"tip",vertical:"middle"})]),f,e("p",null,[l("The Medic can place a shield on the target by pressing the Kill button. The Medic can only give one shield for the whole game. When the Medic dies, the target's shield will be removed. The Medic can also see if someone is trying to break the target's shield."),g,l(" Depending on the host's settings, the Medic or the target can see if the player has a shield (shown as a"),t(i,{size:"5em",color:"#00ff97"},{default:n(()=>[l("「⬤」")]),_:1}),l("next to the name).")]),e("ul",null,[M,e("li",null,[l("Shield deactivates when the Medic dies "),e("ul",null,[e("li",null,[t(i,{color:"green"},{default:n(()=>[l("ON")]),_:1}),l(": the Shield will disappear when the Medic dies"),e("ul",null,[e("li",null,[l("Shield deactivation is visible "),e("ul",null,[e("li",null,[t(i,{color:"green"},{default:n(()=>[l("ON")]),_:1}),l(": the Shield will show that it disappeared"),e("ul",null,[w,S,e("li",null,[t(i,{color:"red"},{default:n(()=>[l("OFF")]),_:1}),l(" - the Shield will disappear without showing that it disappeared")])])])])])])]),e("li",null,[t(i,{color:"red"},{default:n(()=>[l("OFF")]),_:1}),l(": the Shield will remain even after the Medic dies")])])]),b,e("li",null,[l("Guessing ignores Medic Shield "),e("ul",null,[e("li",null,[t(i,{color:"green"},{default:n(()=>[l("ON")]),_:1}),l(": Shield will be ignored when someone tries to guess the Shielded player")]),e("li",null,[t(i,{color:"red"},{default:n(()=>[l("OFF")]),_:1}),l(": Shield will protect the Shielded player from being guessed")])])])]),e("div",y,[k,e("p",null,[l("Medic was reworked as of Canary Build 1 (2.5.1_1), previously it was based on "),e("a",v,[l("KARPED1EM"),t(d)]),l("'s code, but now it's based on Town of Us Reactivated")])]),e("blockquote",null,[e("p",null,[l("From: ToUR & Coding: "),e("a",x,[l("Tommy-XL"),t(d)])])])])}const F=s(u,[["render",N],["__file","Medic.html.vue"]]);export{F as default};
