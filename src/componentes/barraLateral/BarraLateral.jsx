import "./style.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import imagemCC from '../../assets/corel1.svg'

const BarraLateral = () => {
  return (
    <div className="barraLateral">
    <div className="topo">
        <Link to="/" style={{ textDecoration: "none" }}>
        <div className="item">
            <img
              src={imagemCC}
              alt=""
              className="imgLogo"
            />
            <p className="logo">
            CUSTOM CLOTHES
          </p>
        </div>
        </Link>
      </div>
      <div className="centro">
        <ul>
          <p className="titulo">PRINCIPAL</p>
          <Link to="/" style={{textDecoration: "none"}}>
            <li>
              <DashboardIcon className="icone" />
              <span>Dashboard</span>
            </li>
            <p className="titulo">LISTAS</p>
          </Link>
          <Link to="/usuarios" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icone" />
              <span>Usuários</span>
            </li>
          </Link>
          <Link to="/produtos" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icone" />
              <span>Produtos</span>
            </li>
          </Link>
          <Link to="/pedidos" style={{textDecoration: "none"}}>
            <li>
              <CreditCardIcon className="icone" />
              <span>Pedidos</span>
            </li>
          </Link>
          <li>
            <LocalShippingIcon className="icone" />
            <span>Entrega</span>
          </li>
          <p className="titulo">ÚTIL</p>
          <li>
            <InsertChartIcon className="icone" />
            <span>Estatísticas</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icone" />
            <span>Notificações</span>
          </li>
          <p className="titulo">USUÁRIO</p>
          <li>
            <AccountCircleOutlinedIcon className="icone" />
            <span>Perfil</span>
          </li>
          <li>
            <ExitToAppIcon className="icone" />
            {/*Conectar as telas usuarios*/}
            <a href="">
              <span>Sair</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BarraLateral;
