import { useEffect } from "react";
import { SplashPageProps } from "../../types";

export const useSplash = (props: SplashPageProps) => {
  const { navigation } = props;
  
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Main');
    }, 2000);
  }, [navigation]);

  return {};
}