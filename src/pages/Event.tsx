// Import Components
import { useParams } from "react-router-dom";
import { Header } from "../components/Header"
import { Sidebar } from "../components/Sidebar"
import { Video } from '../components/Video';

/*
interface Params {
  slug: string;
}
 Como é um parametro só, então jogamos direto no useParams
*/

export function Event() {
  const { slug } = useParams<{ slug: string }>()

 return(
 <div className="flex flex-col min-h-screen">
   <Header />
    <main className="flex flex-1">
     { slug
      ?  <Video lessonSlug={slug} />
      : <div className="flex-1" />
     }
     <Sidebar />
    </main>
 </div>
 )
}

// { slug ?  <Video /> : <div className="flex-1"/>} se tiver um "slug" mostrará o video, se não...