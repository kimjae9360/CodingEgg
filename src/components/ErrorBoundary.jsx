import React from 'react';

// Catches render-time errors anywhere below it in the tree and shows a
// visible message + stack trace instead of leaving a blank white page.
export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, info) {
    console.error('App crashed:', error, info?.componentStack);
  }

  render() {
    if (this.state.error) {
      return (
        <div style={{
          minHeight: '100vh',
          background: '#0B1120',
          color: '#fff',
          fontFamily: 'monospace',
          padding: '32px',
          whiteSpace: 'pre-wrap',
        }}>
          <h1 style={{ color: '#ff4b4b', fontSize: '20px', marginBottom: '16px' }}>
            화면을 표시하는 중 오류가 발생했습니다
          </h1>
          <div style={{ marginBottom: '16px' }}>{String(this.state.error?.message || this.state.error)}</div>
          <div style={{ opacity: 0.6, fontSize: '12px' }}>{this.state.error?.stack}</div>
          <button
            onClick={() => this.setState({ error: null })}
            style={{
              marginTop: '24px',
              background: '#FFB300',
              color: '#fff',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            다시 시도
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
