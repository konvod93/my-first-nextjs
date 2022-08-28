
import Head from "next/head";



const Reviews = ({ reviews }) => {
    
    return (
        <>
            <Head>
                <title>
                    Жирные бургеры | Главная
                </title>
                <meta name="title" content="Жирные бургеры" />
            </Head>
            <div>
                <h1>
                    Отзывы клиентов
                </h1>
                <div className='reviews'>
                    {!!reviews.length && reviews.slice(0, 20).map(res => {
                        return (
                            <div key={res.id} className='review'>
                                {res.id}{' '}
                                {`${res.body.slice(0, 90)}...`}
                            </div>
                        )
                    })}
                </div>

            </div>
        </>
    )
}

export async function getServerSideProps() {
    const responce = await fetch('https://jsonplaceholder.typicode.com/comments');
    const data = await responce.json();

    return {
        props: {
            reviews: data.slice(0, 20)
        }
    }
}

export default Reviews;