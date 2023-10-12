import{_ as r,r as i,o as s,c as d,a as l,d as e,b as o,w as t,e as u}from"./app-77ed2457.js";const c={},h={id:"⚙️-system-settings",tabindex:"-1"},y=l("a",{class:"header-anchor",href:"#⚙️-system-settings","aria-hidden":"true"},"#",-1),f=l("hr",null,null,-1),_=l("ul",null,[l("li",null,"Swap and choose your saved lobby settings")],-1),p=l("li",null,[l("p",null,"Kick players whose level is lower than"),l("ul",null,[l("li",null,"Set the minimum level required to play")])],-1),m=l("p",null,"Turn on Whitelist to bypass level kick",-1),b=l("p",null,"Kick Non-PC players",-1),g=l("p",null,"Kick players who are not logged in",-1),w=l("p",null,"Apply VIP List",-1),k=l("p",null,"Apply DenyName List",-1),O=l("p",null,"Apply BanList",-1),F=l("p",null,"Apply Moderator List",-1),N=l("p",null,"Kick players that say start",-1),v=l("li",null,[e("Number of warnings before kick "),l("ul",null,[l("li",null,"Can set how many warnings a player gets/how many times a player can say start before they get kicked")])],-1),P=u("<li><p>Minutes to wait before auto-starting</p><ul><li>Set how many minutes the host has to wait before the game auto-starts</li></ul></li><li><p>Force start when Lobby Timer (in minutes) goes below</p><ul><li>Set the time when the game will auto-start</li></ul></li><li><p>Minimum player threshold to auto-start</p><ul><li>Set the minimum amount of players required to auto-start the game</li></ul></li><li><p>Initial countdown for auto-starting</p><ul><li>Set the countdown for auto-starting the game</li></ul></li>",4),S=l("p",null,"Auto Play Again",-1),D=l("li",null,[l("p",null,"When a cheating player is found"),l("ul",null,[l("li",null,[e("You can choose an action to take when a player is found cheating "),l("ul",null,[l("li",null,"Ban - Adds them to the BanList.txt immediately"),l("li",null,"Kick - Kicks them from the lobby"),l("li",null,"Notify Me - Notify only the host of the cheating player"),l("li",null,"Notify Everyone - Notify everyone of the cheating player")])])])],-1),E=l("p",null,"Display Kill-log",-1),R=l("code",null,"/l",-1),M=l("p",null,"Display Last Roles",-1),A=l("code",null,"/l",-1),x=l("p",null,"Auto Display Last Result",-1),L=l("code",null,"/l",-1),K=u("<li><p>Suffix</p><ul><li>Change the Suffix under Host name</li><li>You can choose between: <ul><li>None - Displays nothing</li><li>Version - Displays which TOHE update the lobby is using</li><li>Streaming - Displays that you are Live-Streaming</li><li>Recording - Displays that you are Recording</li><li>Room Host - Displays that you are the Host of the Room</li><li>Original Name - Displays your Among Us Display Name</li><li>Don’t kill me - Displays the words “Don’t kill me” below your name</li><li>No phones - Displays “No phones” below your name</li><li>Auto-Host - Displays “Auto-Host” below your name</li></ul></li></ul></li>",1),H=l("p",null,"Hide Game Settings",-1),T=l("p",null,[e("Enable only custom "),l("code",null,"/n"),e(" messages")],-1),C=l("code",null,"/n",-1),j=l("code",null,"/n",-1),B=l("p",null,[e("Players can use the "),l("code",null,"/color"),e(" command")],-1),I=l("code",null,"/color",-1),V=l("li",null,[l("p",null,"Player Name Mode"),l("ul",null,[l("li",null,[e("This is how the player’s name is displayed in game. You can choose between: "),l("ul",null,[l("li",null,"Name - Display the player’s name"),l("li",null,"Color - Display the player’s color"),l("li",null,"Random - Display a random name")])])])],-1),U=l("p",null,"Disable Emoji in names",-1),q=l("p",null,"Show Role Info to Unmodded Clients Round 1",-1),W=l("p",null,"Show Role Descriptions to Unmodded Clients at First Meeting",-1),Y=l("p",null,"Role Assigning Algorithm",-1),G=l("li",null,"Default",-1),X=l("li",null,".NET System Random",-1),z=l("li",null,"HashRandom",-1),J={href:"https://www.programmingalgorithms.com/algorithm/xor-shift/",target:"_blank",rel:"noopener noreferrer"},Q={href:"https://www.programmingalgorithms.com/algorithm/mersenne-twister/",target:"_blank",rel:"noopener noreferrer"},Z=l("li",null,"Default - Everyone appears grey",-1),$=l("code",null,"/up [rolename]",-1),ll=l("code",null,"/up [rolename]",-1),el=l("blockquote",null,[l("p",null,"From: Moe")],-1);function ol(nl,tl){const n=i("font"),a=i("ExternalLinkIcon");return s(),d("div",null,[l("h1",h,[y,e(),o(n,{color:"#ffc0cb"},{default:t(()=>[e("⚙️ System Settings")]),_:1})]),f,l("ul",null,[l("li",null,[o(n,{color:"#ffeb04"},{default:t(()=>[e("Preset")]),_:1}),_]),l("li",null,[o(n,{color:"red"},{default:t(()=>[e("Black Screen Prevention (Recommended)")]),_:1}),l("ul",null,[l("li",null,[o(n,{color:"green"},{default:t(()=>[e("ON")]),_:1}),e(": Mod will prevent black-screening")]),l("li",null,[o(n,{color:"red"},{default:t(()=>[e("OFF")]),_:1}),e(": Mod will not prevent black-screening")])])]),l("li",null,[o(n,{color:"#01ff00"},{default:t(()=>[e("Enable use of /kcount command")]),_:1}),l("ul",null,[l("li",null,[o(n,{color:"green"},{default:t(()=>[e("ON")]),_:1}),e(": Players can use /kcount to see the amount of killers left")]),l("li",null,[o(n,{color:"red"},{default:t(()=>[e("OFF")]),_:1}),e(": Players cannot use /kcount to see the amount of killers left")])])]),l("li",null,[o(n,{color:"#01ff00"},{default:t(()=>[e("See ejected roles in meetings")]),_:1}),l("ul",null,[l("li",null,[o(n,{color:"green"},{default:t(()=>[e("ON")]),_:1}),e(": Roles of ejected players will be shown to everyone")]),l("li",null,[o(n,{color:"red"},{default:t(()=>[e("OFF")]),_:1}),e(": Roles of ejected players will not be shown to everyone")])])]),p,l("li",null,[m,l("ul",null,[l("li",null,[e("Set the minimum level required to play "),l("ul",null,[l("li",null,[o(n,{color:"green"},{default:t(()=>[e("ON")]),_:1}),e(": Whitelisted players can join the lobby even if they don't meet lobby requirements")]),l("li",null,[o(n,{color:"red"},{default:t(()=>[e("OFF")]),_:1}),e(": Whitelisted players are ignored, and treated as everyone else is")])])])])]),l("li",null,[b,l("ul",null,[l("li",null,[o(n,{color:"green"},{default:t(()=>[e("ON")]),_:1}),e(": Non-PC players cannot play"),l("ul",null,[l("li",null,[e("Kick Android players "),l("ul",null,[l("li",null,[o(n,{color:"green"},{default:t(()=>[e("ON")]),_:1}),e(": Android players will be kicked from the lobby automatically")]),l("li",null,[o(n,{color:"red"},{default:t(()=>[e("OFF")]),_:1}),e(": Android players will not be kicked from the lobby automatically")])])]),l("li",null,[e("Kick iOS players "),l("ul",null,[l("li",null,[o(n,{color:"green"},{default:t(()=>[e("ON")]),_:1}),e(": iOS players will be kicked from the lobby automatically")]),l("li",null,[o(n,{color:"red"},{default:t(()=>[e("OFF")]),_:1}),e(": iOS players will not be kicked from the lobby automatically")])])]),l("li",null,[e("Kick Xbox players "),l("ul",null,[l("li",null,[o(n,{color:"green"},{default:t(()=>[e("ON")]),_:1}),e(": Xbox players will be kicked from the lobby automatically")]),l("li",null,[o(n,{color:"red"},{default:t(()=>[e("OFF")]),_:1}),e(": Xbox players will not be kicked from the lobby automatically")])])]),l("li",null,[e("Kick PlayStation players "),l("ul",null,[l("li",null,[o(n,{color:"green"},{default:t(()=>[e("ON")]),_:1}),e(": PlayStation players will be kicked from the lobby automatically")]),l("li",null,[o(n,{color:"red"},{default:t(()=>[e("OFF")]),_:1}),e(": PlayStation players will not be kicked from the lobby automatically")])])]),l("li",null,[e("Kick Nintendo Switch players "),l("ul",null,[l("li",null,[o(n,{color:"green"},{default:t(()=>[e("ON")]),_:1}),e(": Nintendo Switch players will be kicked from the lobby automatically")]),l("li",null,[o(n,{color:"red"},{default:t(()=>[e("OFF")]),_:1}),e(": Nintendo Switch players will not be kicked from the lobby automatically")])])])])]),l("li",null,[o(n,{color:"red"},{default:t(()=>[e("OFF")]),_:1}),e(": Non-PC players can play")])])]),l("li",null,[g,l("ul",null,[l("li",null,[o(n,{color:"green"},{default:t(()=>[e("ON")]),_:1}),e(": Players without a registered account cannot play")]),l("li",null,[o(n,{color:"red"},{default:t(()=>[e("OFF")]),_:1}),e(": Players without a registered account can play")])])]),l("li",null,[w,l("ul",null,[l("li",null,[o(n,{color:"green"},{default:t(()=>[e("ON")]),_:1}),e(": Players who are VIPs will be given a VIP Tag in the lobby")]),l("li",null,[o(n,{color:"red"},{default:t(()=>[e("OFF")]),_:1}),e(": There will be no VIP Tag in the lobby")])])]),l("li",null,[k,l("ul",null,[l("li",null,[o(n,{color:"green"},{default:t(()=>[e("ON")]),_:1}),e(": Players using names in the DenyName.txt document cannot play")]),l("li",null,[o(n,{color:"red"},{default:t(()=>[e("OFF")]),_:1}),e(": All names are allowed to play")])])]),l("li",null,[O,l("ul",null,[l("li",null,[o(n,{color:"green"},{default:t(()=>[e("ON")]),_:1}),e(": Players that have been banned in previous lobbies cannot join new lobbies by the host")]),l("li",null,[o(n,{color:"red"},{default:t(()=>[e("OFF")]),_:1}),e(": Players that have been banned in previous lobbies can rejoin new lobbies by the host")])])]),l("li",null,[F,l("ul",null,[l("li",null,[o(n,{color:"green"},{default:t(()=>[e("ON")]),_:1}),e(": Players that have been added to the Host’s Moderator List will be given Moderator Permissions in the lobby")]),l("li",null,[o(n,{color:"red"},{default:t(()=>[e("OFF")]),_:1}),e(": Players that have been added to the Host’s Moderator List will not be given Moderator Permissions in the lobby")])])]),l("li",null,[N,l("ul",null,[l("li",null,[o(n,{color:"green"},{default:t(()=>[e("ON")]),_:1}),e(": Players that type “start, Start, begin, etc” will be kicked from the lobby"),l("ul",null,[v,l("li",null,[e("Block a player after they’re kicked "),l("ul",null,[l("li",null,[o(n,{color:"green"},{default:t(()=>[e("ON")]),_:1}),e(": Players that get kicked from spamming Start will be auto-blocked")]),l("li",null,[o(n,{color:"red"},{default:t(()=>[e("OFF")]),_:1}),e(": Players can join even when kicked")])])])])]),l("li",null,[o(n,{color:"red"},{default:t(()=>[e("OFF")]),_:1}),e(": Players will be able to say “start, Start, begin, etc” without being kicked")])])]),P,l("li",null,[S,l("ul",null,[l("li",null,[o(n,{color:"green"},{default:t(()=>[e("ON")]),_:1}),e(": The game will auto-start again after the game ends")]),l("li",null,[o(n,{color:"red"},{default:t(()=>[e("OFF")]),_:1}),e(": The game will not auto-start again after the game ends")])])]),l("li",null,[o(n,{color:"#0000ff"},{default:t(()=>[e("Show lobby code in Discord Status")]),_:1}),l("ul",null,[l("li",null,[o(n,{color:"green"},{default:t(()=>[e("ON")]),_:1}),e(": The lobby code will be displayed in your Discord Status (Only works if you have Discord Rich Presence enabled)")]),l("li",null,[o(n,{color:"red"},{default:t(()=>[e("OFF")]),_:1}),e(": The lobby code will not be displayed in your Discord Status")])])]),l("li",null,[o(n,{color:"#01ff00"},{default:t(()=>[e("Low Load Mode")]),_:1}),l("ul",null,[l("li",null,[o(n,{color:"green"},{default:t(()=>[e("ON")]),_:1}),e(": Mod will use less power for loading things, making it run a bit faster")]),l("li",null,[o(n,{color:"red"},{default:t(()=>[e("OFF")]),_:1}),e(": Mod will use its default power for loading things, making it run a bit slower")])])]),l("li",null,[o(n,{color:"#0000ff"},{default:t(()=>[e("End the game when a player has a critical error")]),_:1}),l("ul",null,[l("li",null,[o(n,{color:"green"},{default:t(()=>[e("ON")]),_:1}),e(": Game will force end once a player gets a game breaking bug")]),l("li",null,[o(n,{color:"red"},{default:t(()=>[e("OFF")]),_:1}),e(": Game will continue as before")])])]),l("li",null,[o(n,{color:"#ff00ff"},{default:t(()=>[e("Remove pets at dead players")]),_:1}),l("ul",null,[l("li",null,[o(n,{color:"green"},{default:t(()=>[e("ON")]),_:1}),e(": Pets will be removed from dead players")]),l("li",null,[o(n,{color:"red"},{default:t(()=>[e("OFF")]),_:1}),e(": Pets will not be removed from dead players")])])]),D,l("li",null,[E,l("ul",null,[l("li",null,[o(n,{color:"green"},{default:t(()=>[e("ON")]),_:1}),e(": Kill-log of the previous round will be displayed once people enter the lobby")]),l("li",null,[o(n,{color:"red"},{default:t(()=>[e("OFF")]),_:1}),e(": Kill-log will not automatically be displayed. (People can still "),R,e(")")])])]),l("li",null,[M,l("ul",null,[l("li",null,[o(n,{color:"green"},{default:t(()=>[e("ON")]),_:1}),e(": Everyone's roles of the previous round will be displayed once people enter the lobby")]),l("li",null,[o(n,{color:"red"},{default:t(()=>[e("OFF")]),_:1}),e(": Roles will not automatically be displayed. (People can still "),A,e(")")])])]),l("li",null,[x,l("ul",null,[l("li",null,[o(n,{color:"green"},{default:t(()=>[e("ON")]),_:1}),e(": Last Results of the previous round will be displayed once people enter the lobby")]),l("li",null,[o(n,{color:"red"},{default:t(()=>[e("OFF")]),_:1}),e(": Last Results will not automatically be displayed. (People can still "),L,e(")")])])]),K,l("li",null,[H,l("ul",null,[l("li",null,[o(n,{color:"green"},{default:t(()=>[e("ON")]),_:1}),e(": Others won't see what roles are enabled/disabled")]),l("li",null,[o(n,{color:"red"},{default:t(()=>[e("OFF")]),_:1}),e(": Others can see what roles are enabled/disabled like usual")])])]),l("li",null,[T,l("ul",null,[l("li",null,[o(n,{color:"green"},{default:t(()=>[e("ON")]),_:1}),e(": only custom "),C,e(" messages that are created by the host can be used")]),l("li",null,[o(n,{color:"red"},{default:t(()=>[e("OFF")]),_:1}),e(": all default "),j,e(" messages can be used")])])]),l("li",null,[B,l("ul",null,[l("li",null,[o(n,{color:"green"},{default:t(()=>[e("ON")]),_:1}),e(": players can "),I,e(" to change their Bean Color")]),l("li",null,[o(n,{color:"red"},{default:t(()=>[e("OFF")]),_:1}),e(": players cannot change it with the command and have to do it normally")])])]),V,l("li",null,[U,l("ul",null,[l("li",null,[o(n,{color:"green"},{default:t(()=>[e("ON")]),_:1}),e(": players cannot use emoji in their names")]),l("li",null,[o(n,{color:"red"},{default:t(()=>[e("OFF")]),_:1}),e(": players can use emoji in their names")])])]),l("li",null,[q,l("ul",null,[l("li",null,[o(n,{color:"green"},{default:t(()=>[e("ON")]),_:1}),e(": Info about each User's role is sent to them Round 1")]),l("li",null,[o(n,{color:"red"},{default:t(()=>[e("OFF")]),_:1}),e(": Users have to manually type /m to check their role info")])])]),l("li",null,[W,l("ul",null,[l("li",null,[o(n,{color:"green"},{default:t(()=>[e("ON")]),_:1}),e(": descriptions about each User's role is sent to them on the First Meeting")]),l("li",null,[o(n,{color:"red"},{default:t(()=>[e("OFF")]),_:1}),e(": Users have to manually type /m to check their role description")])])]),l("li",null,[o(n,{color:"red"},{default:t(()=>[e("No Game End")]),_:1}),l("ul",null,[l("li",null,[o(n,{color:"green"},{default:t(()=>[e("ON")]),_:1}),e(": the game cannot end until the host ends it")]),l("li",null,[o(n,{color:"red"},{default:t(()=>[e("OFF")]),_:1}),e(": the game can end normally")])])]),l("li",null,[o(n,{color:"red"},{default:t(()=>[e("BepInEx Console")]),_:1}),l("ul",null,[l("li",null,[o(n,{color:"green"},{default:t(()=>[e("ON")]),_:1}),e(": the console stays open during Hosting")]),l("li",null,[o(n,{color:"red"},{default:t(()=>[e("OFF")]),_:1}),e(": the console minimizes during Hosting")])])]),l("li",null,[Y,l("ul",null,[l("li",null,[e("These just change how roles are randomly assigned. You can choose between: "),l("ul",null,[G,X,z,l("li",null,[l("a",J,[e("Xorshift"),o(a)])]),l("li",null,[l("a",Q,[e("MersenneTwister"),o(a)])])])])])]),l("li",null,[o(n,{color:"#ffc0cb"},{default:t(()=>[e("Camouflage Appearance")]),_:1}),l("ul",null,[l("li",null,[e("Set the appearance of how Camouflage looks when communications are sabotaged "),l("ul",null,[Z,l("li",null,[o(n,{color:"#ffff00"},{default:t(()=>[e("Host")]),_:1}),e(" - Everyone appears as the host's skin")]),l("li",null,[o(n,{color:"#e3bacd"},{default:t(()=>[e("KARPED1EM")]),_:1}),e(" - Everyone appears as KARPED1EM's skin (the original creator of the mod)")]),l("li",null,[o(n,{color:"#f5dbdf"},{default:t(()=>[e("Lauryn")]),_:1}),e(" - Everyone appears as Lauryn's skin (the project leads girlfriend)")]),l("li",null,[o(n,{color:"#ff8000"},{default:t(()=>[e("Moe")]),_:1}),e(" - Everyone appears as Moe's skin (the project lead)")]),l("li",null,[o(n,{color:"#ec7578"},{default:t(()=>[e("Pyro")]),_:1}),e(" - Everyone appears as Pyro's skin (the Website Assistant)")]),l("li",null,[o(n,{color:"#9e2424"},{default:t(()=>[e("ryuk")]),_:1}),e(" - Everyone appears as ryuk's skin (a lead contributor)")])])])])]),l("li",null,[o(n,{color:"cyan"},{default:t(()=>[e("Enable Youtuber Plan")]),_:1}),l("ul",null,[l("li",null,[o(n,{color:"green"},{default:t(()=>[e("ON")]),_:1}),e(": Host can use the command "),$,e(" to get the specified role on the next game - Requires Permissions")]),l("li",null,[o(n,{color:"red"},{default:t(()=>[e("OFF")]),_:1}),e(": Host cannot use the command "),ll,e(" to get the specified role on the next game")])])])]),el])}const il=r(c,[["render",ol],["__file","System.html.vue"]]);export{il as default};
