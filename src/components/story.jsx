// import myImg from '../assets/img1.jpg'

export function Story({title, data1, data2,pic}) {
    return (
        <div>
            <h2 className="heading">{title}</h2>
            <p className="data">{data1}</p>
            <p className="data">{data2}</p>
            {/*<img src={myImg} alt=""/>*/}
            <img src={pic} alt=""/>
        </div>)
}