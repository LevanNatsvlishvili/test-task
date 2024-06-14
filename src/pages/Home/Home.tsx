import Button from '@/components/Button';
import { paths } from '@/routing/Paths';
import { Link } from 'react-router-dom';

interface DirectionBoxProps {
  heading: string;
  href: string;
}

const DirectionBox = ({ heading, href }: DirectionBoxProps) => {
  return (
    <div className="max-w-365 text-white ">
      <p className="text-14 leading-17 font-600">Test</p>
      <p className="text-32 leading-38 font-700 mt-8">{heading}</p>

      <Link to={href} className="absolute bottom-40">
        <Button text="Case Study" />
      </Link>
    </div>
  );
};

const Home = () => {
  return (
    <div className="h-100vh bg-darkBlue">
      <div className="grid grid-rows-3 h-full">
        <div className="bg-darkBlue px-60 py-24 relative">
          <DirectionBox href={paths.adminPanel} heading="Admin Panel Manage Category Page" />

          <div className="absolute bottom-0 right-0 h-full pt-40">
            <img src="images/home/admin-panel.png" className="max-w-536 h-full" />
          </div>
        </div>
        <div className="bg-skyBlue px-60 py-24 relative">
          <DirectionBox href={paths.dragAndDropAnimation} heading="Hover animation With drag and drop" />

          <div className="absolute bottom-0 right-0 h-full">
            <img src="images/home/dnd-boxes.png" className="max-w-536 h-full" />
          </div>
        </div>
        <div className="bg-darkBlue px-60 py-24 relative">
          <DirectionBox href={paths.graphicAnimation} heading="Graphic animation" />

          <div className="absolute bottom-0 right-0 h-full">
            <img src="images/home/graphic.png" className="max-w-536 h-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
