import React from "react";
import styled, { useTheme } from "styled-components/native";

const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3,
};

const positionVariant = {
  top: "marginTop",
  left: "marginLeft",
  right: "marginRight",
  bottom: "marginBottom",
};

const getVariant = (position, size, theme) => {
  const sizeIndex = sizeVariant[size];
  const property = positionVariant[position];
  const value = theme.space[sizeIndex];

  return `${property}:${value}`;
};

const SpacerView = styled.View`
  ${({ variant }) => variant};
`;

export const Spacer = ({ position, size, children }) => {
  const theme = useTheme();
  const variant = getVariant(position, size, theme);
  return <SpacerView variant={variant}>{children}</SpacerView>;
};

Spacer.defaultProps = {
  position: "top",
  size: "small",
};

// import React from "react";
// import styled from "styled-components/native";

// const TopSmall = styled.View`
//   margin-top: ${(props) => props.theme.space[1]};
// `;

// const TopMedium = styled.View`
//   margin-top: ${(props) => props.theme.space[2]};
// `;

// const TopLarge = styled.View`
//   margin-top: ${(props) => props.theme.space[3]};
// `;

// const BottomSmall = styled.View`
//   margin-bottom: ${(props) => props.theme.space[1]};
// `;

// const BottomMedium = styled.View`
//   margin-bottom: ${(props) => props.theme.space[2]};
// `;

// const BottomLarge = styled.View`
//   margin-bottom: ${(props) => props.theme.space[3]};
// `;

// const LeftSmall = styled.View`
//   margin-left: ${(props) => props.theme.space[1]};
// `;

// const LeftMedium = styled.View`
//   margin-left: ${(props) => props.theme.space[2]};
// `;

// const LeftLarge = styled.View`
//   margin-left: ${(props) => props.theme.space[3]};
// `;

// const RightSmall = styled.View`
//   margin-right: ${(props) => props.theme.space[1]};
// `;

// const RightMedium = styled.View`
//   margin-right: ${(props) => props.theme.space[2]};
// `;

// const RightLarge = styled.View`
//   margin-right: ${(props) => props.theme.space[3]};
// `;

// export const Spacer = ({ variant }) => {
//   if (variant === "top.medium") {
//     return <TopMedium />;
//   }
//   if (variant === "top.large") {
//     return <TopLarge />;
//   }
//   if (variant === "left.small") {
//     return <LeftSmall />;
//   }
//   if (variant === "left.medium") {
//     return <LeftMedium />;
//   }
//   if (variant === "left.large") {
//     return <LeftLarge />;
//   }

//   if (variant === "bottom.small") {
//     return <BottomSmall />;
//   }
//   if (variant === "bottom.medium") {
//     return <BottomMedium />;
//   }
//   if (variant === "bottom.large") {
//     return <BottomLarge />;
//   }

//   if (variant === "right.small") {
//     return <RightSmall />;
//   }
//   if (variant === "right.medium") {
//     return <RightMedium />;
//   }
//   if (variant === "right.large") {
//     return <RightLarge />;
//   }

//   return <TopSmall />;
// };
