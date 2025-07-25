
import { useGLTF } from '@react-three/drei'
import { useSelector } from 'react-redux';
import { models } from './models';



export function ModelToView(props) {

  const {PathToModel, id} = useSelector(state => state.DataChurch);
  const { nodes, materials } = useGLTF(PathToModel);
  const MaterialComponent = models[id];  
  
  return (
    <>
      <MaterialComponent nodes={nodes} materials={materials}></MaterialComponent>      
    </>
  )

}

