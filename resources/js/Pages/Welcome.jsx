
import Menu from '@/Components/menu';
import { Link, Head } from '@inertiajs/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/index.css';
import PrimaryParty from '@/Components/primaryparty';
import SecundaryParty from '@/Components/secundaryparty';
import TerceiraParty from '@/Components/terceiraparty';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Fade } from 'react-awesome-reveal';


export default function Welcome() {
    return (
        <>
            <Head title="André Luiz Personal" />
            <ParallaxProvider scrollAxis='horizontal'>
                <div className=''>
                    <Menu />
                    <div>
                        <Fade cascade damping={1.0}>
                            <PrimaryParty />

                        </Fade>
                        
                        <SecundaryParty />
                        <TerceiraParty />
                        

                    </div>
                </div>

            </ParallaxProvider>

        </>
    );
}
