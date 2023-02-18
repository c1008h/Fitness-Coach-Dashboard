import { Refine } from "@pankod/refine-core";
import {
  notificationProvider,
  RefineSnackbarProvider,
  CssBaseline,
  GlobalStyles,
  ReadyPage,
  ErrorComponent,
  AuthPage,
} from "@pankod/refine-mui";
import {
  AccountCircleOutlined, ChatBubbleOutline, PeopleAltOutlined, StarOutlineRounded, VillaOutlined
} from '@mui/icons-material'
import axios, { InternalAxiosRequestConfig } from "axios";
import dataProvider from "@pankod/refine-simple-rest";
import { MuiInferencer } from "@pankod/refine-inferencer/mui";
import routerProvider from "@pankod/refine-react-router-v6";
import { ColorModeContextProvider } from "contexts";
import { Title, Sider, Layout, Header } from "components/layout";
import { authProvider } from "./authProvider";
import { Login, Home, Clients, ClientDetail, CreateClient, EditClient, Urgent, MyProfile } from 'pages'

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use((request: InternalAxiosRequestConfig<any>) => {
    const token = localStorage.getItem("token");
    if (request.headers) {
        request.headers["Authorization"] = `Bearer ${token}`;
    } 

    request.headers["Authorization"] = `Bearer ${token}`;
    return request;
});

function App() {
  return (
    <ColorModeContextProvider>
      <CssBaseline />
      <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />
      <RefineSnackbarProvider>
        <Refine
          dataProvider={dataProvider("https://api.fake-rest.refine.dev")}
          notificationProvider={notificationProvider}
          ReadyPage={ReadyPage}
          catchAll={<ErrorComponent />}
          resources={[
            {
              name: "clients",
              list: Clients,
              show: ClientDetail,
              create: CreateClient,
              edit: EditClient,
              icon:<PeopleAltOutlined/>,
            },
            {
              name: "urgent",
              options: { label: 'Urgent'},
              list: MuiInferencer,
              icon: <StarOutlineRounded />
            },
            {
              name: "messages",
              list: MuiInferencer,
              icon: <ChatBubbleOutline />
            },
            {
              name: "my-profile",
              options: { label: 'My Profile'},
              show: MyProfile,
              edit: MyProfile,
              icon: <AccountCircleOutlined />
            },

          ]}
          Title={Title}
          Sider={Sider}
          Layout={Layout}
          Header={Header}
          routerProvider={routerProvider}
          authProvider={authProvider}
          LoginPage={AuthPage}
          DashboardPage={Home}
        />
      </RefineSnackbarProvider>
    </ColorModeContextProvider>
  );
}

export default App;
