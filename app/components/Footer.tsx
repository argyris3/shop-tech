import Link from 'next/link';
import Container from './Container';
import FooterList from './FooterList';
import { MdFacebook } from 'react-icons/md';
import { AiFillInstagram, AiFillTwitterCircle, AiFillYoutube } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className="bg-slate-700 text-slate-200 text-sm mt-16">
      <Container>
        <div className="flex flex-col md:flex-row pt-16 pb-8">
          <FooterList>
            <h3 className="text-base font-bold mb-2 ">Κατηγοριες</h3>
            <Link href="#">Τηλεφωνια</Link>
            <Link href="#">Laptops</Link>
            <Link href="#">DeskTops</Link>
            <Link href="#">Ρολογια</Link>
            <Link href="#">Τηλεορασεις</Link>
            <Link href="#">Αξεσουαρ</Link>
          </FooterList>
          <FooterList>
            <h3 className="text-base font-bold mb-2 ">Εξυπηρετηση</h3>
            <Link href="#">Επικοινωνια</Link>
            <Link href="#">Τροποι Αποστολης</Link>
            <Link href="#">Πολιτικη Επιστροφων</Link>
            <Link href="#">FAQs</Link>
          </FooterList>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-base font-bold mb-2">Σχετικα με εμας</h3>
            <p className="mb-2   ">
              Στο ηλεκτρονικο μας καταστημα ειμαστε αφοσιωμενοι να παρεχουμε τις οσο δυνατον καλυτερες υπηρεσιες στους
              πελατες μας με ευρη καταλογο απο προιοντα
            </p>
            <p>&copy; {new Date().getFullYear()} Tech-Shop</p>
          </div>
          <FooterList>
            <h3 className="text-base font-bold mb-2">Ακουλουθηστε μας</h3>
            <div className="flex gap-2">
              <Link href="#">
                <MdFacebook size={24} />
              </Link>
              <Link href="#">
                <AiFillTwitterCircle size={24} />
              </Link>
              <Link href="#">
                <AiFillInstagram size={24} />
              </Link>
              <Link href="#">
                <AiFillYoutube size={24} />
              </Link>
            </div>
          </FooterList>
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
