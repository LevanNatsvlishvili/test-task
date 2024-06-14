import Routing from '@/routing';
import '@/styles/globals.scss';
import { ConfigProvider } from 'antd';
import { theme } from '@/assets/commons/antDesignTheme/theme';

function App() {
  return (
    <ConfigProvider theme={theme}>
      <Routing />
    </ConfigProvider>
  );
}

export default App;
