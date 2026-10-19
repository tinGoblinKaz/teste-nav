import { NavigationContainer } from "@react-navigation/native";

import { StackRoutes } from "./StackRoutes";
import { BottomRoutes } from "./BottomRoutes";
import { DrawerRoutes } from "./DrawerRoutes";

const TIPOS_DE_NAVEGACAO = "drawer";

export function Routes(){
    return(
        <NavigationContainer>
           {TIPOS_DE_NAVEGACAO === "stack" && <StackRoutes/>}
           {TIPOS_DE_NAVEGACAO === "bottom" && <BottomRoutes/>} 
           {TIPOS_DE_NAVEGACAO === "drawer" && <DrawerRoutes/>} 
        </NavigationContainer>
    )
}