export function CircleColorPresenter({ token }: { token: { value: string } }) {
  return (
    <div style={{
      width: 30,
      height: 30,
      borderRadius: '50%',
      background: token.value
    }}
    ></div >
  );
}