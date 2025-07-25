
import { useGLTF } from '@react-three/drei'
import { useSelector } from 'react-redux';

export function ModelToView() {
  const {PathToModel, ModelStruct} = useSelector(state => state.DataChurch);
  // const { nodes, materials } = useGLTF(PathToModel)

  return (
    <>
      {ModelStruct}
    </>
  )
}

// useGLTF.preload(props.PathToModel)
