import { icons, LucideProps } from "lucide-react-native";
import { View } from "react-native";

export type IconNames = keyof typeof icons;

type IconProps = Omit<LucideProps, "size"> & {
  icon: IconNames;
  className?: string;
  size?: number;
};

function Icon({ icon, className, size, ...props }: IconProps) {
  const SelectedLucideIcon = (icons as any)[icon];

  return (
    <View>
      <SelectedLucideIcon {...props} />
    </View>
  );
}

export default Icon;
