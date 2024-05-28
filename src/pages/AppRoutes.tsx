import { paths } from '@/routing/Paths';
import Home from './Home';
import DragAndDropAnime from './DragAndDropAnime';
import AdminPanel from './AdminPanel';
import GraphicAnimation from './GraphicAnimation';

const AppRoutes = [
  {
    path: paths.home,
    element: <Home />,
  },
  {
    path: paths.adminPanel,
    element: <AdminPanel />,
  },
  {
    path: paths.dragAndDropAnimation,
    element: <DragAndDropAnime />,
  },
  {
    path: paths.graphicAnimation,
    element: <GraphicAnimation />,
  },
];
export default AppRoutes;
