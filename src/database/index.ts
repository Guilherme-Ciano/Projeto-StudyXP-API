import { createConnection } from "typeorm";

createConnection().then((con: any) => {
  console.log(
    "| Conexão estabelecida com: " +
      con.driver.database +
      "\n|----------------------------------------|"
  );
});
