exports.up = async knex => {
  const exist = await knex.schema.hasTable("users")

  if(!exist){
    await knex.schema.createTable("users", table => {
      table.increments("id")
      table.text("name")
      table.text("email")
      table.text("password")
      table.text("avatar").default(null)
      table.timestamp("created_at").default(knex.fn.now())
      table.timestamp("updated_at").default(knex.fn.now())
    });
  }
} 

exports.down = async knex => await knex.schema.dropTableIfExists("users");