import { RightOutlined } from '@ant-design/icons';
import { Button } from 'antd';

interface ButtonProps {
  text: string;
}

const CustomButton = ({ text }: ButtonProps) => {
  return (
    <Button
      type="primary"
      icon={<RightOutlined />}
      iconPosition="end"
      className="w-278 h-60 flex items-center justify-between rounded-16 px-30 py-10 text-white text-18 leading-22 font-600"
    >
      {text}
    </Button>
  );
};

export default CustomButton;
