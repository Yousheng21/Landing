import React from "react";

import styled from "styled-components";

export const Appearance = () => (
  <section className="flex flex-col gap-20" id="ui">
    <H1>
      Лаконичный современный дизайн, <br /> в котором нет ничего лишнего
    </H1>
    <div className="flex justify-between gap-10">
      <Block path="appearance2">
        <h3 className="text-[20px] text-white font-semibold">Минималистичный дизайн </h3>
        <span className="text-[14px] text-white font-normal">
          Рама, компоненты и аксессуары скутера выдержаны в едином стиле, где удобство пользователя выходит на первое место. Одного
          прикосновения достаточно, чтобы запустить самокат.
        </span>
      </Block>
      <Block path="appearance1">
        <h3 className="text-[20px] text-white font-semibold">Удобная панель управления</h3>
        <span className="text-[14px] text-white font-normal">
          Удобно расположенные элементы управления. Отображение8 типов данных в реальном времени: скорость, режим, заряд аккумулятора,
          состояние блокировки и другая информация.
        </span>
      </Block>
    </div>
  </section>
);

const H1 = styled.h1`
  color: ${(props) => props.theme.orange};
  font-size: 45px;
`;

const Block = styled.div<{ path: string }>`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 30px;
  padding-left: 20%;
  background-image: ${(props) => `url(assets/${props.path}.png)`};
  background-color: black;
  background-position: 30% 10%;
  background-repeat: no-repeat;
  background-size: cover;
  height: 560px;
  border-radius: 15px;
`;
