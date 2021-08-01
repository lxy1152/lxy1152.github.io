---
title: 🌻 MyBatis
---
  
## XML 配置文件中常用的标签有哪些？

- `select`/`insert`/`update`/`delete`：对应这四种 SQL 语句
- `sql`：可被其他语句引用的可重用语句块，比如表字段
- `include`：引用代码片段
- `parameterType`：限定参数类型
- `resultType`：限定返回结果类型
- `resultMap`：结果集映射

另外还有动态 sql 标签：`trim`、`where`、`set`、`foreach`、`if`、`choose`、`when`、`otherwise`、`bind`。

## MyBatis 的动态 SQL？

Mybatis 动态 SQL 可以让开发人员在 XML 配置文件中，以标签的形式编写动态 SQL，完成逻辑判断和动态拼接 SQL 的功能，Mybatis 提供了 9 种动态 sql 标签：`trim`，`where`，`set`，`foreach`，`if`，`choose`，`when`，`otherwise`，`bind`。

执行原理为，使用 OGNL 从 SQL 参数对象中计算表达式的值，根据表达式的值动态拼接 SQL。

## #{} 和 ${} 的区别？<Badge text="重点" type="error"/>

- `${}` 是 Properties 文件中的变量占位符，它可以用于标签属性值和 SQL 内部，属于静态文本替换，比如 `${driver}` 会被静态替换为 `com.mysql.jdbc.Drive`
- `#{}` 是 SQL 的参数占位符，Mybatis 会将 SQL 中的 `#{}` 替换为 `?`，在 sql 执行前会使用 `PreparedStatement` 的参数设置方法，按序给 SQL 中的 `?` 设置参数值，比如 `ps.setInt(0, parameterValue)`，可以解决 SQL 注入攻击问题

## MyBatis 是如何将结果封装为对象的？

1. 通过 `<resultMap>` 标签，逐一定义列名和对象属性名之间的映射关系
2. 使用 SQL 列的别名功能，将列别名书写为对象属性名，比如 `T_NAME AS NAME`。尽管对象属性名一般是小写，但是 Mybatis 会忽略列名的大小写，智能找到与之对应对象属性名，甚至可以写成 `T_NAME AS NaMe`，Mybatis 一样可以正常工作

有了列名与属性名的映射关系后，Mybatis 通过反射创建对象，同时使用反射给对象的属性逐一赋值并返回，那些找不到映射关系的属性，是无法完成赋值的。

## 介绍一下 Mapper 接口？

Mapper 接口会对应一个配置文件，这个配置文件中 `namespace` 的值，就是接口的全限定名。接口中的方法名，就是配置文件中 `MappedStatement` 的 id 值，接口方法内的参数，就是传递给 SQL 的参数。

Mapper 接口是不需要给出实现类的，当调用接口方法时，接口全限定名 + 方法名拼接字符串作为 `key` 值，可唯一定位一个 `MappedStatement`，比如根据 `mypackage.dao.findUserById`，可以唯一找到 `namespace` 为 `mypackage.dao` 下面 `id = findUserById` 的 `MappedStatement`。

在运行时，MyBatis 利用 JDK 动态代理，为接口生成代理对象，代理对象会拦截接口方法，转而执行 `MappedStatement` 所代表的 SQL，然后将 SQL 执行结果返回。

:::tip MappedStatement
在 Mybatis 中，每一个 `<select>`、`<insert>`、`<update>`、`<delete>` 标签，都会被解析为一个 `MappedStatement` 对象。
:::

:::warning 方法不能重载
这个接口中的方法，是不能重载的，因为是根据全限定名 + 方法名的策略来寻找的。
:::

## MyBatis 插件机制的原理？

Mybatis 仅可以编写针对 `ParameterHandler`、`ResultSetHandler`、`StatementHandler`、`Executor` 这 4 种接口的插件。Mybatis 使用 JDK 动态代理，为需要拦截的接口生成代理对象以实现接口方法拦截功能，每当执行这 4 种接口对象的方法时，就会进入拦截方法。

实现 Mybatis 的 `Interceptor` 接口并重写 `intercept()` 方法，然后在给插件编写注解，指定要拦截哪一个接口的哪些方法就可以实现一个插件了，不要忘了在配置文件中配置上编写的插件。

## MyBatis 的分页机制？

Mybatis 使用 `RowBounds` 对象进行分页，它是针对 `ResultSet` 结果集执行的内存分页，而非物理分页，可以在 SQL 内直接书写带有物理分页的参数来完成物理分页功能，也可以使用分页插件来完成物理分页。

分页插件的基本原理是使用 Mybatis 提供的插件接口实现自定义插件，在插件的拦截方法内拦截待执行的 SQL 并重写，添加对应的物理分页语句和物理分页参数。

举例：`select _ from student`，拦截 SQL 后重写为：`select t._ from (select * from student) t limit 0, 10`。
