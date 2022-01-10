import * as C from './styles';
import { CharacterSides } from '../../types/CharacterSides';

type Props = {
    x: number;
    y: number;
    side: CharacterSides;
}

export const Character = ({ x, y, side }: Props) => {
    const size = 30;
    const sides = {
        down: 0,
        up: 30,
        right: 60,
        left: 90,
    }

    return (
        <C.Container
            size={size}
            left={x * size}
            top={y * size}
            sidePos={sides[side] ?? 0}
        >
            
        </C.Container>
    );
}