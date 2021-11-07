CREATE DATABASE parqueadero_4_ruedas;
USE parqueadero_4_ruedas;

CREATE TABLE vehiculos (
    id_vehiculo INT NOT NULL auto_increment PRIMARY KEY,
    marca VARCHAR(100) NOT NULL, 
    color VARCHAR(100) NOT NULL,     
    año_vehiculo VARCHAR(100) NOT NULL, 
    propierario_id INT NOT NULL 
);

CREATE TABLE propietarios (
    id_propietario INT NOT NULL auto_increment PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,     
    documento VARCHAR(100) NOT NULL     
);

DELIMITER $$

DROP FUNCTION IF EXISTS `test`.`initcap`$$

CREATE FUNCTION `initcap`(x char(30)) RETURNS char(30) CHARSET utf8
READS SQL DATA
DETERMINISTIC
BEGIN
SET @str='';
SET @l_str='';
WHILE x REGEXP ' ' DO
SELECT SUBSTRING_INDEX(x, ' ', 1) INTO @l_str;
SELECT SUBSTRING(x, LOCATE(' ', x)+1) INTO x;
SELECT CONCAT(@str, ' ', CONCAT(UPPER(SUBSTRING(@l_str,1,1)),LOWER(SUBSTRING(@l_str,2)))) INTO @str;
END WHILE;
RETURN LTRIM(CONCAT(@str, ' ', CONCAT(UPPER(SUBSTRING(x,1,1)),LOWER(SUBSTRING(x,2)))));
END$$

DELIMITER ;