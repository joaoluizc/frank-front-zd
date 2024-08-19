import { SendIcon, ThumbsDown, ThumbsUp } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Button } from "../ui/button"
import { Textarea } from "../ui/textarea"

export default function Chat() {
    return (
        <>
            <div className="flex-1 overflow-auto p-4">
                <div className="grid gap-4">
                    <div className="flex items-start gap-4">
                        <Avatar className="w-10 h-10 border">
                            <AvatarImage src="/placeholder-user.jpg" />
                            <AvatarFallback>AC</AvatarFallback>
                        </Avatar>
                        <div className="grid gap-1 bg-muted p-3 rounded-lg max-w-[75%]">
                            <div className="w-60 break-words">Hey there! How can I help you today?</div>
                            <div className="text-xs text-muted-foreground text-left flex items-center">
                                <span className="h-fit mr-1">2:39 PM</span>
                                <Button
                                    className="px-1 py-3 h-2"
                                    variant="ghost"
                                >
                                    <ThumbsDown size={16}>
                                    </ThumbsDown>
                                </Button>
                                <Button
                                    className="px-1 py-3 h-2"
                                    variant="ghost"
                                >
                                    <ThumbsUp size={16}>
                                    </ThumbsUp>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 justify-end">
                        <div className="grid gap-1 bg-primary text-primary-foreground p-3 rounded-lg max-w-[75%]">
                            <div className="w-60 break-words">Please write an answer to this customer.</div>
                            <div className="text-xs text-primary-foreground/80 flex items-center justify-end">
                                <span className="h-fit mr-1">2:40 PM</span>
                            </div>
                        </div>
                        <Avatar className="w-10 h-10 border">
                            <AvatarImage src="/placeholder-user.jpg" />
                            <AvatarFallback>AC</AvatarFallback>
                        </Avatar>
                    </div>
                    <div className="flex items-start gap-4">
                        <Avatar className="w-10 h-10 border">
                            <AvatarImage src="/placeholder-user.jpg" />
                            <AvatarFallback>AC</AvatarFallback>
                        </Avatar>
                        <div className="grid gap-1 bg-muted p-3 rounded-lg max-w-[75%]">
                            <div className="w-60 break-words">{testMessage}</div>
                            <div className="text-xs text-muted-foreground text-left flex items-center">
                                <span className="h-fit mr-1">2:41 PM</span>
                                <Button
                                    className="px-1 py-3 h-2"
                                    variant="ghost"
                                >
                                    <ThumbsDown size={16}>
                                    </ThumbsDown>
                                </Button>
                                <Button
                                    className="px-1 py-3 h-2"
                                    variant="ghost"
                                >
                                    <ThumbsUp size={16}>
                                    </ThumbsUp>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="footer-message-input" className="bg-muted p-2 flex items-center">
                <Textarea placeholder="Type your message..." className="flex-1 border-none focus:ring-0 resize-none" rows={1} />
                <Button variant="ghost" size="icon" className="text-muted-foreground">
                    <div className="w-5 h-5">
                        <SendIcon />
                    </div>
                    <span className="sr-only">Send</span>
                </Button>
            </div>
        </>
    )
}
    

const testMessage = `Ciao Daiana,

Grazie per averci contattato di nuovo. Sono Frank, del team di supporto tecnico di Duda. Sono qui per aiutarti!

Riassumendo, il problema riguarda il Meta Title delle pagine legali nel tuo negozio, che attualmente mostra il titolo di un prodotto invece del titolo della pagina legale pertinente. Questo è stato segnalato dal tuo team operativo e riguarda l'intera base clienti.

Il problema è stato segnalato al nostro team di ingegneria, che ha stimato la risoluzione per il Q4. Tuttavia, questa stima potrebbe essere soggetta a modifiche.

Nel frattempo, ti suggeriamo una soluzione temporanea:
1. Crea una nuova pagina legale personalizzata nell'editor del sito.
2. Copia l'URL di questa nuova pagina.
3. Vai a Vendere Online > Gestisci Negozio > Impostazioni > Legale > trova la pagina legale pertinente > clicca Modifica.
4. Scorri verso il basso fino a 'Impostazioni della Pagina', clicca 'Cambia titolo e indirizzo della pagina', e aggiungi un titolo e l'URL copiato.

Ecco un video che mostra come fare: [Video Demo](https://drive.google.com/file/d/1DpPMFY8rWNTbfz15tBHTmAj4eBFx21tl/view?usp=drivesdk).

Ti terrò aggiornato sui progressi della risoluzione del problema. Fammi sapere se posso aiutarti con qualcos'altro nel frattempo.

Cordiali saluti,
Frank



 References: 
https://support.duda.co/hc/it/articles/1500001499641 
https://support.duda.co/hc/it/articles/1500001498421 
https://support.duda.co/hc/it/articles/4410652521239 
https://support.duda.co/hc/it/articles/360061888053 `