import BlockHeading from "../BlockHeading/BlockHeading.component";
import ReadMore from "./ReadMore/ReadMore.component";
import Video from "@/app/common/components/Video/Video.component";
import "./Text.styles.scss"

interface Props {   
}

const TextComponent = ({ }: Props) => {
   const text="Тарас Шевченко народився 9 березня 1814 року в селі Моринці Пединівської волості Звенигородського повіту Київської губернії. Був третьою дитиною селян-кріпаків Григорія Івановича Шевченка та Катерини Якимівни після сестри Катерини (1804 — близько 1848) та брата Микити (1811 — близько 1870).\r\n\r\nЗа родинними переказами, Тарасові діди й прадіди з батьківського боку походили від козака Андрія, який на початку XVIII століття прийшов із Запорізької Січі. Батьки його матері, Катерини Якимівни Бойко, були переселенцями з Прикарпаття.\r\n\r\n1816 року сім'я Шевченків переїхала до села Кирилівка Звенигородського повіту, звідки походив Григорій Іванович. Дитячі роки Тараса пройшли в цьому селі. 1816 року народилася Тарасова сестра Ярина, 1819 року — сестра Марія, а 1821 року народився Тарасів брат Йосип.\r\n\r\nВосени 1822 року Тарас Шевченко почав учитися грамоти у дяка Совгиря. Тоді ж ознайомився з творами Григорія Сковороди.\r\n\r\n10 лютого 1823 року його старша сестра Катерина вийшла заміж за Антона Красицького — селянина із Зеленої Діброви, а 1 вересня 1823 року від тяжкої праці й злиднів померла мати Катерина. \r\n\r\n19 жовтня 1823 року батько одружився вдруге з удовою Оксаною Терещенко, в якої вже було троє дітей. Вона жорстоко поводилася з нерідними дітьми, зокрема з малим Тарасом. 1824 року народилася Тарасова сестра Марія — від другого батькового шлюбу."
   const text1="Наприкінці 1906 року до Києва було перенесене видання «Літературно-наукового вістника» і Грушевський опублікував у ньому статті присвячені українському рухові. Був одним із організаторів та редакторів газети «Рада» і часопису «Україна». Після організації Українського Наукового Товариства в Києві весною 1907, був обраний його головою. Водночас Грушевський очолював і львівське товариство, постійно перебуваючи то у Києві, то у Львові. \r\n\r\n У вересні 1907 за участі Грушевського, що увійшов до його керівництва, було створене нелегальне позапартійне українське громадське об'єднання — Товариство українських поступовців, що згуртувало сили українства й до 1917 року було єдиною діяльною українською організацією ліберального напряму. Свою політичну платформу Грушевський базував у той час на принципах конституційного парламентаризму й автономії України. \r\n\r\n Початок Першої світової війни Грушевський зустрів у своєму маєтку в селі Криворівня в Карпатах. Через воєнні дії він не зміг одразу вирушити до Києва. Його маршрут проліг через Угорщину, Австрію, а далі Румунією, що на той момент була нейтральною державою. \r\n\r\n Повернувся історик до Києва 22 листопада 1914 року. Російська влада була вороже налаштована до вченого, наказ по губернському жандармському управлінні про його ув'язнення був датований ще 30 серпня 1914 року. 28 листопада 1914 року Грушевського заарештували за звинуваченням у австрофільстві, шпигунстві та причетності до створення Легіону Українських січових стрільців. Утримували його у Лук'янівській в'язниці до 18 лютого 1915, за цей час його допитували не менше 16 разів. Слідство вів підполковник Самохвалов. \r\n\r\n Відправлений на заслання до Симбірська (нині м. Ульяновськ) власним коштом у супроводі одного конвоїра, куди прибув 22 лютого 1915 року. Склав головування в УНТ. Завдяки клопотанню Петроградської академії наук, Грушевському було дозволено переїхати до м. Казані та займатися науковою роботою з забороною викладацької діяльності. 31 березня 1916 року вчена рада Львівського університету позбавила його посади професора. У вересні 1916 року переїхав до Москви, де розгорнув активну громадсько-політичну діяльність. Відновив роботу московської філії Товариства українських поступовців, брав участь у роботі видавництва «Украинская жизнь». Прагнув об'єднати опозиційні українські сили. Продовжував наукову роботу, працював в архіві МЗС Росії, Румянцевській бібліотеці (нині Російська державна бібліотека) над матеріалами до 8-го тому «Історії України-Руси»";  
  
   return (
      <div className={"textComponentContainer"}>
        <BlockHeading headingText={"Професор історії, гіпстер чи політик?"}/>
          <div className="textComponent">
            <div className={"TextContainer"}>
              <ReadMore children={text1}></ReadMore> 
            </div>   
          </div>
          <div className="videoComponent">
            <Video video={["f55dHPEY-0U"]}/>
          </div>
      </div>
    );
}
export default TextComponent;