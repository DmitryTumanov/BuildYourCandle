import React, {useReducer, useMemo} from 'react';
import {Canvas} from '@react-three/fiber';
import {Environment, AccumulativeShadows, RandomizedLight, OrbitControls} from '@react-three/drei';
import './SceneCanvas.css';
import {Grid, IconButton} from "@mui/material";
import {getBuilderState, getNavigationState, useAppDispatch, useAppSelector} from "../store/hooks";
import RoundBoxButton from "../menu/buttons/RoundBoxButton";
import VisibilityIcon from '@mui/icons-material/Visibility';
import {updateControlsVisibility} from "../store/builderSlice";
import {BUILDER_PAGE} from "../utils/constants";

interface SceneCanvasProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
    height: string;
    width: string;
    onClick: () => void;
}

function SceneCanvas(props: SceneCanvasProps) {
    const {children, height, width, onClick} = props;
    const dispatch = useAppDispatch();
    const builder = useAppSelector(getBuilderState);
    const navigation = useAppSelector(getNavigationState);
    const [, forceUpdate] = useReducer(x => x + 1, 0);
    useMemo(() => {console.log(builder.items); forceUpdate();}, [builder.items]);

    const updateControls = () => {
        dispatch(updateControlsVisibility());
    }

    return (
        <Grid size={{xs: 12, md: 12}}
              sx={{order: {xs: 2, md: 1}, boxSizing: 'border-box' as const, overflow: 'auto'}}>
            <div id="canvas-container" style={{height: height, width: width}} onClick={onClick}>
                <RoundBoxButton
                    isSelected={builder.hideControls}
                    key={"new_item_button"}
                    hoverEnabled={false}
                    onClick={() => updateControls()}
                    customSx={{
                        position: 'absolute',
                        width: '40px',
                        height: '40px',
                        top: 16,
                        right: 16,
                        zIndex: 100
                    }}
                    hide={builder.items.length < 1 || navigation.currentPage !== BUILDER_PAGE}
                >
                    <IconButton
                        sx={{
                            width: "100%",
                            height: "100%",
                            borderRadius: '50%',
                            fontSize: "25px"
                        }}
                    >
                        <VisibilityIcon fontSize="inherit"/>
                    </IconButton>
                </RoundBoxButton>
                <Canvas
                    shadows
                    camera={{position: [0, 0, 4.5], fov: 50}}
                    style={{width: '100%', height: '100%'}}
                >
                    <ambientLight intensity={Math.PI}/>
                    <AccumulativeShadows position={[0, -0.9, 0]} frames={100} alphaTest={0.75} opacity={0.9}>
                        <RandomizedLight radius={4} position={[5, 5, 9]} bias={0.001}/>
                    </AccumulativeShadows>
                    {children}
                    <Environment preset={'warehouse'} background blur={1}/>
                    <OrbitControls autoRotate autoRotateSpeed={4} enablePan={false} enableZoom={false}
                                   minPolarAngle={Math.PI / 2.1} maxPolarAngle={Math.PI / 2.1}/>
                </Canvas>
            </div>
        </Grid>
    );
}

export default SceneCanvas;
