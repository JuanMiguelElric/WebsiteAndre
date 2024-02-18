
import Menu from '@/Components/menu';
import { Link, Head } from '@inertiajs/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/index.css';
import PrimaryParty from '@/Components/primaryparty';
export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="André Luiz Personal" />
            <div class="primarybackground">
                <Menu />
                <PrimaryParty />
            </div>

        </>
    );
}
