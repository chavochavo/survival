(function(module){
	var DBService = function(){
		var service = {};
		var database;

		service.loadDB = function(){
			console.log('Loading database...');
			var b64DB = localStorage.getItem('survival-db');
			if(b64DB){
				var bytes = new Uint8Array(atob(b64DB).split("").map(function(c) {
					return c.charCodeAt(0); }));
				database = new SQL.Database(bytes);
			}else{
				console.log('Creating new db...');
				database = new SQL.Database();	
			}

			if(b64DB) return;

			console.log('creating table app_user');
			database.run(
				"CREATE TABLE IF NOT EXISTS APP_USER(" +
					"EMAIL TEXT NOT NULL PRIMARY KEY, " +
					"FULLNAME TEXT NOT NULL , " +
					"AGE INT NOT NULL , " + 	  
					"BIRTHDAY TEXT NOT NULL , "+
					"COUNTRY TEXT NOT NULL , "+
					"PASSWORD TEXT NOT NULL);"
			);

			// Registro de usuarios
			database.exec("INSERT INTO APP_USER(EMAIL, FULLNAME, AGE, BIRTHDAY, COUNTRY, PASSWORD) VALUES('gustavo@hotmail.com','Gustavo Sergio Cortez Sanchez',76,'10/07/16','Veracruz','12345');");
			database.exec("INSERT INTO APP_USER(EMAIL, FULLNAME, AGE, BIRTHDAY, COUNTRY, PASSWORD) VALUES('yuo@gmail.com','Yuossef Esper Mendoza',76,'10/07/16','Veracruz','12345');");
			database.exec("INSERT INTO APP_USER(EMAIL, FULLNAME, AGE, BIRTHDAY, COUNTRY, PASSWORD) VALUES('zepeda@hotmail.com','Ernesto De Jesus Hernandez Zepeda',76,'10/07/16','Veracruz','12345');");
			database.exec("INSERT INTO APP_USER(EMAIL, FULLNAME, AGE, BIRTHDAY, COUNTRY, PASSWORD) VALUES('octavio@gmail.com','Octavio Ramirez Perez',76,'10/07/16','Veracruz','12345');");			
			database.exec("INSERT INTO APP_USER(EMAIL, FULLNAME, AGE, BIRTHDAY, COUNTRY, PASSWORD) VALUES('pedro@gmail.com','Pedro de Jesús Enríquez Contreras',20,'10/07/16','Veracruz','12345');");
			database.exec("INSERT INTO APP_USER(EMAIL, FULLNAME, AGE, BIRTHDAY, COUNTRY, PASSWORD) VALUES('juan@admin','Juan Antonio Mendez',20,'10/07/16','Veracruz','12345');");
			database.exec("INSERT INTO APP_USER(EMAIL, FULLNAME, AGE, BIRTHDAY, COUNTRY, PASSWORD) VALUES('emma@gmail.com','Emmanuel Martínez Fernández',26,'10/07/16','Veracruz','12345');");
			database.exec("INSERT INTO APP_USER(EMAIL, FULLNAME, AGE, BIRTHDAY, COUNTRY, PASSWORD) VALUES('zule@gmail.com','Zuleyma Vazquez',20,'10/07/16','Veracruz','12345');");
			database.exec("INSERT INTO APP_USER(EMAIL, FULLNAME, AGE, BIRTHDAY, COUNTRY, PASSWORD) VALUES('fabian@gmail.com','Fabián Trejo Perez',20,'10/07/16','Veracruz','12345');");
			database.exec("INSERT INTO APP_USER(EMAIL, FULLNAME, AGE, BIRTHDAY, COUNTRY, PASSWORD) VALUES('burgos@gmail.com','Luis Alfredo Burgos Rendón',26,'10/07/16','Veracruz','12345');");
			database.exec("INSERT INTO APP_USER(EMAIL, FULLNAME, AGE, BIRTHDAY, COUNTRY, PASSWORD) VALUES('eric@gmail.com','Eric Alfonso',22,'10/07/16','Veracruz','12345');");
			database.exec("INSERT INTO APP_USER(EMAIL, FULLNAME, AGE, BIRTHDAY, COUNTRY, PASSWORD) VALUES('ferrari@gmail.com','Erick Ismael Lopez Ferrari',22,'10/07/16','Veracruz','12345');");
			database.exec("INSERT INTO APP_USER(EMAIL, FULLNAME, AGE, BIRTHDAY, COUNTRY, PASSWORD) VALUES('arturo@gmail.com','Arturo Castro Ramírez',22,'10/07/16','Veracruz','12345');");
			database.exec("INSERT INTO APP_USER(EMAIL, FULLNAME, AGE, BIRTHDAY, COUNTRY, PASSWORD) VALUES('exodia@gmail.com','Christian Alan Lundberg Jiménez',21,'10/07/16','Veracruz','12345');");
			database.exec("INSERT INTO APP_USER(EMAIL, FULLNAME, AGE, BIRTHDAY, COUNTRY, PASSWORD) VALUES('hugo@gmail.com','Hugo Iván Vázquez Palacios',21,'10/07/16','Veracruz','12345');");
			database.exec("INSERT INTO APP_USER(EMAIL, FULLNAME, AGE, BIRTHDAY, COUNTRY, PASSWORD) VALUES('agusto@gmail.com','Augusto Perez Garcia',21,'10/07/16','Veracruz','12345');");
			database.exec("INSERT INTO APP_USER(EMAIL, FULLNAME, AGE, BIRTHDAY, COUNTRY, PASSWORD) VALUES('edgar@gmail.com','Edgar Castro',21,'10/07/16','Veracruz','12345');");
			database.exec("INSERT INTO APP_USER(EMAIL, FULLNAME, AGE, BIRTHDAY, COUNTRY, PASSWORD) VALUES('breton@gmail.com','Manuel Breton',21,'10/07/16','Veracruz','12345');");
			database.exec("INSERT INTO APP_USER(EMAIL, FULLNAME, AGE, BIRTHDAY, COUNTRY, PASSWORD) VALUES('ramz@gmail.com','Ramiro Perez',21,'10/07/16','Veracruz','12345');");
			database.exec("INSERT INTO APP_USER(EMAIL, FULLNAME, AGE, BIRTHDAY, COUNTRY, PASSWORD) VALUES('jose@gmail.com','Jose Jimenez',23,'10/07/16','Veracruz','12345');");

			//admin
			database.exec("INSERT INTO APP_USER(EMAIL, FULLNAME, AGE, BIRTHDAY, COUNTRY, PASSWORD) VALUES('admin@admin','ADMIN',76,'10/07/16','Veracruz','admin');");

		
			service.persistDB();
		};
		service.getDB = function(){
			return database;
		};
		
		service.persistDB = function(){
			var bytes = database.export();			
			var b64encoded = btoa(String.fromCharCode.apply(null, bytes));
			localStorage.setItem('survival-db', b64encoded);
 		};
		return service;
	};
	module.factory('DBService', DBService);
})(angular.module('survivalApp'));