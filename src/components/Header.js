import React from "react";
import AppBar from "material-ui/AppBar";

const styles = {
    center: {
        textAlign: 'center'
    }
}

const Header = () => 
    <AppBar title="BookFinder" showMenuIconButton={false} titleStyle={styles.center} />;

export default Header;