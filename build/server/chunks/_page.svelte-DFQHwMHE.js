import { p as push, e as ensure_array_like, c as pop } from './index-ecfIZWCp.js';
import { e as escape_html } from './escaping-CqgfEcN3.js';

const replacements = {
  translate: /* @__PURE__ */ new Map([
    [true, "yes"],
    [false, "no"]
  ])
};
function attr(name, value, is_boolean = false) {
  if (value == null || !value && is_boolean) return "";
  const normalized = name in replacements && replacements[name].get(value) || value;
  const assignment = is_boolean ? "" : `="${escape_html(normalized, true)}"`;
  return ` ${name}${assignment}`;
}
function _page($$payload, $$props) {
  push();
  let groups = [
    {
      name: "Gruppo 1",
      teams: [
        {
          name: "Nani del Volley",
          played: 0,
          points: 0,
          wins: 0,
          setCoefficient: 0,
          pointDifference: 0,
          setWin: 0,
          setlose: 0,
          puntiFatti: 0,
          puntiSubiti: 0
        },
        {
          name: "Lo Zoo di Biomedica",
          played: 0,
          points: 0,
          wins: 0,
          setCoefficient: 0,
          pointDifference: 0,
          setWin: 0,
          setlose: 0,
          puntiFatti: 0,
          puntiSubiti: 0
        },
        {
          name: "Go Beyond!",
          played: 0,
          points: 0,
          wins: 0,
          setCoefficient: 0,
          pointDifference: 0,
          setWin: 0,
          setlose: 0,
          puntiFatti: 0,
          puntiSubiti: 0
        }
      ],
      matches: []
    },
    {
      name: "Gruppo 2",
      teams: [
        {
          name: "Net Present Volley",
          played: 0,
          points: 0,
          wins: 0,
          setCoefficient: 0,
          pointDifference: 0,
          setWin: 0,
          setlose: 0,
          puntiFatti: 0,
          puntiSubiti: 0
        },
        {
          name: "EDAMAME",
          played: 0,
          points: 0,
          wins: 0,
          setCoefficient: 0,
          pointDifference: 0,
          setWin: 0,
          setlose: 0,
          puntiFatti: 0,
          puntiSubiti: 0
        },
        {
          name: "AC Picchia",
          played: 0,
          points: 0,
          wins: 0,
          setCoefficient: 0,
          pointDifference: 0,
          setWin: 0,
          setlose: 0,
          puntiFatti: 0,
          puntiSubiti: 0
        }
      ],
      matches: []
    },
    {
      name: "Gruppo 3",
      teams: [
        {
          name: "Net Present Value",
          played: 0,
          points: 0,
          wins: 0,
          setCoefficient: 0,
          pointDifference: 0,
          setWin: 0,
          setlose: 0,
          puntiFatti: 0,
          puntiSubiti: 0
        },
        {
          name: "MatNano",
          played: 0,
          points: 0,
          wins: 0,
          setCoefficient: 0,
          pointDifference: 0,
          setWin: 0,
          setlose: 0,
          puntiFatti: 0,
          puntiSubiti: 0
        },
        {
          name: "Aerospeciali",
          played: 0,
          points: 0,
          wins: 0,
          setCoefficient: 0,
          pointDifference: 0,
          setWin: 0,
          setlose: 0,
          puntiFatti: 0,
          puntiSubiti: 0
        }
      ],
      matches: []
    },
    {
      name: "Gruppo 4",
      teams: [
        {
          name: "INFOndo alla classifica",
          played: 0,
          points: 0,
          wins: 0,
          setCoefficient: 0,
          pointDifference: 0,
          setWin: 0,
          setlose: 0,
          puntiFatti: 0,
          puntiSubiti: 0
        },
        {
          name: "Salto Spin 1/2",
          played: 0,
          points: 0,
          wins: 0,
          setCoefficient: 0,
          pointDifference: 0,
          setWin: 0,
          setlose: 0,
          puntiFatti: 0,
          puntiSubiti: 0
        },
        {
          name: "Six Sigma Spikers",
          played: 0,
          points: 0,
          wins: 0,
          setCoefficient: 0,
          pointDifference: 0,
          setWin: 0,
          setlose: 0,
          puntiFatti: 0,
          puntiSubiti: 0
        }
      ],
      matches: []
    },
    {
      name: "Gruppo 5",
      teams: [
        {
          name: "Semiconduttori 3.3",
          played: 0,
          points: 0,
          wins: 0,
          setCoefficient: 0,
          pointDifference: 0,
          setWin: 0,
          setlose: 0,
          puntiFatti: 0,
          puntiSubiti: 0
        },
        {
          name: "Quantum Spikers",
          played: 0,
          points: 0,
          wins: 0,
          setCoefficient: 0,
          pointDifference: 0,
          setWin: 0,
          setlose: 0,
          puntiFatti: 0,
          puntiSubiti: 0
        },
        {
          name: "Bionici",
          played: 0,
          points: 0,
          wins: 0,
          setCoefficient: 0,
          pointDifference: 0,
          setWin: 0,
          setlose: 0,
          puntiFatti: 0,
          puntiSubiti: 0
        }
      ],
      matches: []
    },
    {
      name: "Gruppo 6",
      teams: [
        {
          name: "Torque Titans",
          played: 0,
          points: 0,
          wins: 0,
          setCoefficient: 0,
          pointDifference: 0,
          setWin: 0,
          setlose: 0,
          puntiFatti: 0,
          puntiSubiti: 0
        },
        {
          name: "Ultimo Minuto",
          played: 0,
          points: 0,
          wins: 0,
          setCoefficient: 0,
          pointDifference: 0,
          setWin: 0,
          setlose: 0,
          puntiFatti: 0,
          puntiSubiti: 0
        },
        {
          name: "Gestionale chi legge",
          played: 0,
          points: 0,
          wins: 0,
          setCoefficient: 0,
          pointDifference: 0,
          setWin: 0,
          setlose: 0,
          puntiFatti: 0,
          puntiSubiti: 0
        }
      ],
      matches: []
    }
  ];
  let score1 = "";
  let score2 = "";
  let punti1_1 = "";
  let punti2_1 = "";
  let punti3_1 = "";
  let punti1_2 = "";
  let punti2_2 = "";
  let punti3_2 = "";
  const each_array = ensure_array_like(groups);
  $$payload.out += `<div class="container has-text-centered mb-5"><section class="hero is-small is-primary"><div class="hero-body"><p class="title">Spring league Polimi</p> <p class="subtitle">Classifiche</p></div></section></div> <div class="container is-centered"><!--[-->`;
  for (let index = 0, $$length = each_array.length; index < $$length; index++) {
    let group = each_array[index];
    const each_array_1 = ensure_array_like(group.teams);
    const each_array_2 = ensure_array_like(group.teams);
    const each_array_3 = ensure_array_like(group.matches);
    const each_array_4 = ensure_array_like(group.teams);
    $$payload.out += `<h2>Inserisci Risultato</h2> <form><select><option value="" disabled>Seleziona Squadra 1</option><!--[-->`;
    for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
      let team = each_array_1[$$index];
      $$payload.out += `<option${attr("value", team.name)}>${escape_html(team.name)}</option>`;
    }
    $$payload.out += `<!--]--></select> <input type="number"${attr("value", score1)} min="0" placeholder=""> <span>-</span> <input type="number"${attr("value", score2)} min="0" placeholder=""> <select><option value="" disabled>Seleziona Squadra 2</option><!--[-->`;
    for (let $$index_1 = 0, $$length2 = each_array_2.length; $$index_1 < $$length2; $$index_1++) {
      let team = each_array_2[$$index_1];
      $$payload.out += `<option${attr("value", team.name)}>${escape_html(team.name)}</option>`;
    }
    $$payload.out += `<!--]--></select> <button type="submit">Aggiorna Classifica</button></form> <form><h2>Set 1</h2> <input type="number"${attr("value", punti1_1)} min="0" placeholder=""> <span>-</span> <input type="number"${attr("value", punti1_2)} min="0" placeholder=""></form> <form><h2>Set 2</h2> <input type="number"${attr("value", punti2_1)} min="0" placeholder=""> <span>-</span> <input type="number"${attr("value", punti2_2)} min="0" placeholder=""></form> <form><h2>Set 3</h2> <input type="number"${attr("value", punti3_1)} min="0" placeholder=""> <span>-</span> <input type="number"${attr("value", punti3_2)} min="0" placeholder=""></form> <button style="margin-top: 10px;">Reset Classifica e Partite</button> <div class="grid-container ml-5 mr-5 svelte-14vlvb1"><table class="table is-bordered svelte-14vlvb1"><thead><tr><th colspan="10" class="has-background-primary svelte-14vlvb1">Partite ${escape_html(group.name)}</th></tr><tr><th class="svelte-14vlvb1">Team 1</th><th class="svelte-14vlvb1">Team 2</th><th colspan="2" class="svelte-14vlvb1">Final score</th><th colspan="2" class="svelte-14vlvb1">Set 1</th><th colspan="2" class="svelte-14vlvb1">Set 2</th><th colspan="2" class="svelte-14vlvb1">Set 3</th></tr></thead><tbody><!--[-->`;
    for (let $$index_2 = 0, $$length2 = each_array_3.length; $$index_2 < $$length2; $$index_2++) {
      let match = each_array_3[$$index_2];
      $$payload.out += `<tr><td class="svelte-14vlvb1">${escape_html(match.team1)}</td><td class="svelte-14vlvb1">${escape_html(match.team2)}</td><td class="svelte-14vlvb1">${escape_html(match.score1)}</td><td class="svelte-14vlvb1">${escape_html(match.score2)}</td><td class="svelte-14vlvb1">${escape_html(match.punti1_1)}</td><td class="svelte-14vlvb1">${escape_html(match.punti1_2)}</td><td class="svelte-14vlvb1">${escape_html(match.punti2_1)}</td><td class="svelte-14vlvb1">${escape_html(match.punti2_2)}</td><td class="svelte-14vlvb1">${escape_html(match.punti3_1)}</td><td class="svelte-14vlvb1">${escape_html(match.punti3_2)}</td></tr>`;
    }
    $$payload.out += `<!--]--></tbody></table> <table class="table is-bordered svelte-14vlvb1"><thead><tr><th colspan="11" class="has-background-primary svelte-14vlvb1">Classifica ${escape_html(group.name)}</th></tr><tr><th class="svelte-14vlvb1">Squadra</th><th class="svelte-14vlvb1">Punti</th><th class="svelte-14vlvb1">Giocate</th><th class="svelte-14vlvb1">Vittorie</th><th class="svelte-14vlvb1">Coefficiente Set</th><th class="svelte-14vlvb1">Differenza Punti</th><th class="svelte-14vlvb1">Set Vinti</th><th class="svelte-14vlvb1">Set Persi</th><th class="svelte-14vlvb1">Punti Fatti</th><th class="svelte-14vlvb1">Punti Subiti</th></tr></thead><tbody><!--[-->`;
    for (let $$index_3 = 0, $$length2 = each_array_4.length; $$index_3 < $$length2; $$index_3++) {
      let team = each_array_4[$$index_3];
      $$payload.out += `<tr><td class="svelte-14vlvb1">${escape_html(team.name)}</td><td class="svelte-14vlvb1">${escape_html(team.points)}</td><td class="svelte-14vlvb1">${escape_html(team.played)}</td><td class="svelte-14vlvb1">${escape_html(team.wins)}</td><td class="svelte-14vlvb1">${escape_html(team.setCoefficient)}</td><td class="svelte-14vlvb1">${escape_html(team.pointDifference)}</td><td class="svelte-14vlvb1">${escape_html(team.setWin)}</td><td class="svelte-14vlvb1">${escape_html(team.setlose)}</td><td class="svelte-14vlvb1">${escape_html(team.puntiFatti)}</td><td class="svelte-14vlvb1">${escape_html(team.puntiSubiti)}</td></tr>`;
    }
    $$payload.out += `<!--]--></tbody></table></div>`;
  }
  $$payload.out += `<!--]--></div>`;
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-DFQHwMHE.js.map
