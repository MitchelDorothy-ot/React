import {useState} from 'react'
import './App.css'
import {Story} from "./components/story.jsx";

import pic_1 from './assets/img1.jpg'
import pic_2 from './assets/img2.jpg'

function Content() {
    return (
        <div>
            <h3>Hello My Component!</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi earum est et magnam necessitatibus rem temporibus voluptas! Dolores eum explicabo facere fugit inventore itaque iure modi, nihil, nisi, possimus voluptatem!</p>
            <hr/>
        </div>)
}

function App() {
    const [count, setCount] = useState(0)

    return (
       <div>
           {/*<Content/>*/}
           {/*<Content/>*/}
           {/*<Content/>*/}
           {/*<Content/>*/}
           <Story pic = {pic_1} title="Hello My Component" data1="Mountain Lion" data2="Coool"/>
           <Story pic = {pic_2} title="React" data1="Sunset" data2="Passing Data"/>

       </div>
    )
}

export default App
