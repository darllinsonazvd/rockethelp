import { Heading, HStack, IconButton, StyledProps, useTheme } from 'native-base';
import { CaretLeft } from 'phosphor-react-native';

type HeaderProps = StyledProps & {
  title: string;
};

export function Header({ title, ...rest }: HeaderProps) {
  const { colors } = useTheme();

  return (
    <HStack
      w="full"
      justifyContent="space-between"
      alignItems="center"
      bg="gray.600"
      pb={6}
      pt={12}
      {...rest}
    >
      <IconButton icon={<CaretLeft color={colors.gray[300]} size={24} />} />

      <Heading flex={1} color="gray.100" textAlign="center" fontSize="lg" ml={-6}>
        {title}
      </Heading>
    </HStack>
  );
}
