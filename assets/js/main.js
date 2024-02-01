/*
Milestone 1
● Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e
dall’interlocutore (bianco) assegnando due classi CSS diverse
● Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare
nome e immagine di ogni contatto
Milestone 2
● Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i
messaggi relativi al contatto attivo all’interno del pannello della conversazione
● Click sul contatto mostra la conversazione del contatto cliccato
Milestone 3
● Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando
“enter” il testo viene aggiunto al thread sopra, come messaggio verde
● Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà
un “ok” come risposta, che apparirà dopo 1 secondo.
Milestone 4
● Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i
contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo
“mar” rimangono solo Marco e Martina)
Milestone 5 - opzionale
● Cancella messaggio: cliccando sul messaggio appare un menu a tendina che
permette di cancellare il messaggio selezionato
 ● Visualizzazione ora e ultimo messaggio inviato/ricevuto nella lista dei contatti
*/

const {
    createApp
  } = Vue
  
  createApp({
    data(){
        return {
          searchText: '',
          newMessage: '',
          randomAnswer: [
            'Come stai oggi?',
            'Hai qualche hobby?',
            'Mi piace leggere libri.',
            'Il mio sport preferito è il calcio.',
            'Sto imparando a suonare la chitarra.',
            'Hai mai visitato la Moldavia?',
            'Mi piace molto la musica rock.',
            'Hai animali domestici?',
            'Mi piace viaggiare.',
            'Qual è il tuo film preferito?',
            'Hai mai provato a fare yoga?',
            'Mi piace andare in bicicletta.',
            'Hai mai visitato la Francia?',
            'Mi piace molto il gelato.',
            'Qual è il tuo libro preferito?',
            'Mi piace molto il caffè.',
            'Hai mai provato a fare meditazione?',
            'Mi piace molto la pizza.',
            'Hai mai visitato la Spagna?',
            'Mi piace molto il cioccolato.',
            'Qual è la tua canzone preferita?',
            'Mi piace molto il tè.',
            'Hai mai provato a fare pilates?',
            'Mi piace molto il sushi.',
            'Hai mai visitato il Giappone?',
            'Mi piace molto la pasta.',
            'Qual è il tuo sport preferito?',
            'Mi piace molto il vino.',
            'Hai mai provato a fare jogging?',
            'Mi piace molto la birra.',
            'Hai mai visitato la Germania?',
            'Mi piace molto il pane.',
            'Qual è il tuo colore preferito?',
            'Mi piace molto la marmellata.',
            'Hai mai provato a fare nuoto?',
            'Mi piace molto la torta.',
            'Hai mai visitato la Spagna?',
            'Mi piace molto il formaggio.',
            'Qual è il tuo dessert preferito?',
            'Qual è il tuo cibo preferito?',
          ],
          contacts: [
            {
              name: 'Michele',
              avatar: 'assets/img/michele.png',
              visible: true,
              messages: [
                {
                  date: '10/01/2020 15:30:55',
                  message: 'Hai portato a spasso il cane?',
                  status: 'sent',
                  visible: true
                },
                {
                  date: '10/01/2020 15:50:00',
                  message: 'Ricordati di stendere i panni',
                  status: 'sent',
                  visible: true
                },
                {
                  date: '10/01/2020 16:15:22',
                  message: 'Tutto fatto!',
                  status: 'received',
                  visible: true
                }
              ],
            },
            {
              name: 'Fabio',
              avatar: 'assets/img/fabio.png',
              visible: true,
              messages: [
                {
                  date: '20/03/2020 16:30:00',
                  message: 'Ciao come stai?',
                  status: 'sent',
                  visible: true
                },
                {
                  date: '20/03/2020 16:30:55',
                  message: 'Bene grazie! Stasera ci vediamo?',
                  status: 'received',
                  visible: true
                },
                {
                  date: '20/03/2020 16:35:00',
                  message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                  status: 'sent',
                  visible: true
                }
              ],
            },
            {
              name: 'Samuele',
              avatar: 'assets/img/samuele.png',
              visible: true,
              messages: [
                {
                  date: '28/03/2020 10:10:40',
                  message: 'La Marianna va in campagna',
                  status: 'received',
                  visible: true
                },
                {
                  date: '28/03/2020 10:20:10',
                  message: 'Sicuro di non aver sbagliato chat?',
                  status: 'sent',
                  visible: true
                },
                {
                  date: '28/03/2020 16:15:22',
                  message: 'Ah scusa!',
                  status: 'received',
                  visible: true
                }
              ],
            },
            {
              name: 'Alessandro B.',
              avatar: 'assets/img/alessandro b..png',
              visible: true,
              messages: [
                {
                  date: '10/01/2020 15:30:55',
                  message: 'Lo sai che ha aperto una nuova pizzeria?',
                  status: 'sent',
                  visible: true
                },
                {
                  date: '10/01/2020 15:50:00',
                  message: 'Si, ma preferirei andare al cinema',
                  status: 'received',
                  visible: true
                }
              ],
            },
            {
              name: 'Alessandro L.',
              avatar: 'assets/img/alessandro l..png',
              visible: true,
              messages: [
                {
                  date: '10/01/2020 15:30:55',
                  message: 'Ricordati di chiamare la nonna',
                  status: 'sent',
                  visible: true
                },
                {
                  date: '10/01/2020 15:50:00',
                  message: 'Va bene, stasera la sento',
                  status: 'received',
                  visible: true
                }
              ],
            },
            {
              name: 'Claudia',
              avatar: 'assets/img/claudia.png',
              visible: true,
              messages: [
                {
                  date: '10/01/2020 15:30:55',
                  message: 'Ciao Claudia, hai novità?',
                  status: 'sent',
                  visible: true
                },
                {
                  date: '10/01/2020 15:50:00',
                  message: 'Non ancora',
                  status: 'received',
                  visible: true
                },
                {
                  date: '10/01/2020 15:51:00',
                  message: 'Nessuna nuova, buona nuova',
                  status: 'sent',
                  visible: true
                }
              ],
            },
            {
              name: 'Federico',
              avatar: 'assets/img/federico.png',
              visible: true,
              messages: [
                {
                  date: '10/01/2020 15:30:55',
                  message: 'Fai gli auguri a Martina che è il suo compleanno!',
                  status: 'sent',
                  visible: true
                },
                {
                  date: '10/01/2020 15:50:00',
                  message: 'Grazie per avermelo ricordato, le scrivo subito!',
                  status: 'received',
                  visible: true
                }
              ],
            },
            {
              name: 'Davide',
              avatar: 'assets/img/davide.png',
              visible: true,
              messages: [
                {
                  date: '10/01/2020 15:30:55',
                  message: 'Ciao, andiamo a mangiare la pizza stasera?',
                  status: 'received',
                  visible: true
                },
                {
                  date: '10/01/2020 15:50:00',
                  message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                  status: 'sent',
                  visible: true
                },
                {
                  date: '10/01/2020 15:51:00',
                  message: 'OK!!',
                  status: 'received',
                  visible: true
                }
              ],
            }
          ], 
          currentContact: null 
        }
    },
    created(){
      if (this.contacts && this.contacts.length > 0) {
        this.currentContact = this.contacts[0];
    }
    },
    methods:{
      generateDate(){
        let DateTime = luxon.DateTime;
        const now = DateTime.local();
        const formattedDatetime = now.toFormat('dd/MM/yyyy HH:mm:ss');
        return formattedDatetime
      },
      formatTime(dateString){
        let DateTime = luxon.DateTime;
        const date = DateTime.fromFormat(dateString, 'dd/MM/yyyy HH:mm:ss');
        const formattedTime = date.toFormat('HH:mm');
        return formattedTime;
      },
      addMessage() {
        if (this.newMessage.trim() !== "") {
          this.currentContact.messages.push(
            {
            date: this.generateDate(),
            message: this.newMessage,
            status: 'sent',
            visible: true
            }
          );
          this.newMessage = "";
          setTimeout(() => {
            let randomIndex = Math.floor(Math.random() * this.randomAnswer.length);
            this.currentContact.messages.push({
              date: this.generateDate(),
              message: this.randomAnswer[randomIndex],
              status: 'received',
              visible: true
            });
          }, 1000);
        }
      },
      changeContact(contact){
        this.currentContact = contact
      },
      searchContact(){
        this.contacts.forEach( (contact) => {
          if( contact.name.toLowerCase().includes( this.searchText.toLowerCase() ) ){
            contact.visible = true
          } else {
            contact.visible = false
          }
        })
      },
      removeMessage(message) {
        message.visible = false;
      },
      getLastVisibleMessage(contact) {
        for (let i = contact.messages.length - 1; i >= 0; i--) {
          if (contact.messages[i].visible) {
            return contact.messages[i].message;
          }
        }
        return '';
      },
      getLastVisibleMessageDate(contact) {
        for (let i = contact.messages.length - 1; i >= 0; i--) {
          if (contact.messages[i].visible) {
            return contact.messages[i].date;
          }
        }
        return '';
      }
    }
  }).mount("#app")