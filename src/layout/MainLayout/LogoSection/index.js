import { Link } from 'react-router-dom';

// material-ui
import { ButtonBase } from '@mui/material';

// project imports
import config from 'config';
import Logo from 'ui-component/Logo';

import Logotipo from "assets/images/Logotip-turquesa.png"

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = () => (
    <ButtonBase disableRipple component={Link} to={config.defaultPath}>
        <img src={Logotipo} width={75}/>
    </ButtonBase>
);

export default LogoSection;
