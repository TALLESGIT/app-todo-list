# 🎉 Bem-vindo ao meu projeto de gerenciamento de tarefas! 📝

## 🤔 O que é isso?

Este é um aplicativo móvel desenvolvido em React Native que permite aos usuários criar, gerenciar e concluir tarefas. É uma ferramenta simples e fácil de usar para ajudar a organizar suas atividades diárias.

## 📈 Funcionalidades

* 📝 Crie tarefas novas e adicione descrições
* 🔄 Marque tarefas como concluídas
* 🚮 Exclua tarefas desnecessárias
* 📊 Veja o número total de tarefas criadas e concluídas

## 🔧 Tecnologias utilizadas

* 📱 React Native
* 💻 TypeScript
* 🎨 Material Community Icons

## 📊 Instalação e execução

1. 📦 Clone o repositório
2. 📈 Instale as dependências com `npm install` ou `yarn install`
3. 📊 Execute o aplicativo com `npm start` ou `yarn start`

## 🤝 Contribuição

Se você deseja contribuir com o projeto, por favor:

* 📖 Leia o código e entenda como ele funciona
* 📝 Abra uma issue para discutir sua ideia de contribuição
* 🔄 Faça um pull request com suas alterações

## 📜 Licença

Este projeto é licenciado sob a licença MIT.

## 👥 Contato

Se você tiver alguma dúvida ou precisar de ajuda, por favor:

* 📝 Abra uma issue no repositório
* 📧 Envie um e-mail para [talescoelho959@gmail.com]

## 👍 Obrigado!

Obrigado por visitar meu projeto! Espero que você encontre útil. Se você tiver alguma sugestão ou crítica, por favor, não hesite em compartilhar. 🤗

## Imagens

![Screenshot 1](./screenshot1.png)


## Código

```jsx
import React, { useRef, useState } from "react";
import { Alert, FlatList, Text, type TextInput, View } from "react-native";
import { Empty } from "../components/Empty";
import { Header } from "../components/Header";
import { Task } from "../components/Task";
import type { TaskDTO } from "../dtios/TaskDTO";
import { uuid } from "../utils/uuid";
import { styles } from "./styles";

export function Home() {
  // ...
}