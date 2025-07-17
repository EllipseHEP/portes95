import { defineStore } from "pinia"

export const useMissionsStore = defineStore("missions", {
  state: () => ({
    userName: "",
    infectionLevel: 0,
    latest_trigger_triggered: "skippy_installed",

    mission_triggers: {
      "skippy_installed": "Bonjour ! Je suis Skippy, votre assistant de bureau. Beau travail de m'avoir installé. Quel est votre nom ?",
      "name_submitted": "Ravi de vous rencontrer aussi, {name} ! Vous êtes prêt pour travailler, continuons !",
      "delay": "Bonjour {name}, Johnny vient de vous envoyer un e-mail. Première chose à faire, vérifiez votre boîte de réception !",
      "email_opened": "Hmm, ça a l'air suspect ...", //Johnny wants to play Minecraft. Let me help you install it. First, open your browser—you're doing great so far!
      "email_opened_delay": "{name}, vous devriez peut-être chercher un téléchargement ailleurs !",
      "browser_opened": "Ensuite, recherchez le jeu. Restez attentif et faites attention aux faux liens et aux virus. Vous savez ça !",
      "installer_downloaded": "{name}, Vous avez téléchargé le jeu! Allez-y et démarrez l'installateur. Bientôt, vous jouerez comme un pro !",
      // or You're a genius, {name}! You got the Minecraft .exe—nice work! You can run it now right from the Desktop!
      "game_opened": "Félicitations, {name!} Vous avez terminé le jeu éducatif, beau travail! [Voici votre certificat](scam.com), bien mérité !"
    },
    reactions: {
      "negative1": "{name}, vous avez cliqué sur un lien suspect. Soyez prudent - cela pourrait apporter des virus !",
      "negative2": "{name}, l'exécution de ce fichier semble risqué. Évitez les infections en restant prudent.",
      "negative3": "{name}, ce site Web semble dangereux. Évitez de le visiter pour garder votre système en sécurité.",
      "negative4": "{name}, l'ouverture de cette application ou de cette popup pourrait être dangereuse. Rester attentif et protègez votre ordinateur !",
      "positive1": "{name}, vous avez trouvé le site officiel du programme d'installation, beau travail !",
      "positive2": "{name}, vous avez choisi le bon programme d'installation - Choix malin et sûr !",
      "positive3": "{name}, vous avez évité ces annonces comme un pro. Votre prudence est vraiment payante !",
      // "phishing1": "Well done, {name}, you avoided malicious links.",
      // "phishing2": "Phishing emails try to steal info or infect your pc by looking like trusted messages. Stay sharp!"
      "phishing1": "Oh oh, {name}. Ce n'était pas le vrai installateur - il semble que ce soit un faux qui peut avoir infecté votre PC. Exécutez votre antivirus pour vérifier.",
      "phishing2": "Oops, ce site était dangereux. Certains liens peuvent installer des logiciels malveillants simplement en cliquant dessus ! Exécutons tout de suite une analyse antivirus complète.",
      "executable1": "Attention, {name}, Ce type de fichier peut être risqué. Des fichiers dangereux comme .exe ou .msi provenant de sources non fiables peuvent transporter des logiciels malveillants. Contrôlez-les toujours !",
      "plottwist1": "Félicitations, {name}! Vous avez terminé le cours interactif de cybersécurité, beau travail !",
      "plottwist2": "Vous avez été concentré et avez réfléchi, cela se voit vraiment. Obtenez votre certificat ici - bien joué !",
      "search_results": "Pourquoi tous ces éléments se ressemblent-ils, {name}? Regardez de plus près - certains peuvent être de faux liens ou dangereux essayant de vous tromper.",
      "scam_site": "Hmm, {name}, ce site n'a pas l'air tout à fait correct. Ce pourrait être une arnaque, revenez en arrière et revérifiez l'URL."
    }
  }),
  actions: {
    triggerEvent(event: string) {
      console.log("Test", event)
      let text = '';
      const missionTriggers = this.mission_triggers as Record<string, string>;
      const reactions = this.reactions as Record<string, string>;
      if (Object.prototype.hasOwnProperty.call(missionTriggers, event)) {
        text = missionTriggers[event];
        this.latest_trigger_triggered = event;
        console.log("story_event_triggered")
      } else if (Object.prototype.hasOwnProperty.call(reactions, event)) {
        text = reactions[event];
        console.log("reaction_event_triggered")
      } else {
        console.log("no_such_event", event)
      }
      console.log(text)
      text = text.replace(/\{name\}/g, this.userName);
      // @ts-ignore
      setTimeout(() => {
      console.log("Setting text")
      // @ts-ignore
      window.setClippyText(text);
      }, 200)


    },
    getStateString() {
      return JSON.stringify({
        userName: this.userName,
        infectionLevel: this.infectionLevel,
        latest_trigger_triggered: this.latest_trigger_triggered
      }, null, 2);
    },
    getLatestStateTriggered() {
      return this.latest_trigger_triggered;
    },
    addInfectionLevel(rate: number) {
      this.infectionLevel += rate;

      // trigger blue screen if infection level is 95+
      if (this.infectionLevel >= 95) {
        this.infectionLevel = 100;
        const payloadsStore = usePayloadsStore();

        payloadsStore.antRunner = false;
        payloadsStore.bobr_kurwa = false;
        payloadsStore.cube = false;
        payloadsStore.kirby_paris_hydra = false;
        payloadsStore.ransomware = false;
        payloadsStore.you_are_an_idiot = false;

        setTimeout(() => {
          payloadsStore.bluescreen = true;
        }, 300)
      }
    }
  }
})
