import { useEffect, useState } from 'react';
import { Route, Switch, Router as WouterRouter, useLocation } from 'wouter';
import { AppShell } from '@/components/finova-shell';
import { loadState, type FinovaState } from '@/lib/finova';
import { Dashboard, FirstPaycheck, Generating, Glossary, Landing, Learn, Lesson, Onboarding, Practice, Profile, Progress, Roadmap } from '@/pages/finova';
import NotFound from '@/pages/not-found';

function RoutedApp() {
  const [state, setState] = useState<FinovaState>(() => loadState());
  const [location] = useLocation();
  useEffect(() => { const onStorage = () => setState(loadState()); window.addEventListener('storage', onStorage); return () => window.removeEventListener('storage', onStorage); }, []);
  useEffect(() => { setState(loadState()); }, [location]);
  const pageProps = { state, setState };
  return <Switch>
    <Route path="/" component={Landing} />
    <Route path="/onboarding" component={Onboarding} />
    <Route path="/roadmap-generating" component={Generating} />
    <Route path="/dashboard">{() => <Dashboard {...pageProps} />}</Route>
    <Route path="/roadmap">{() => <Roadmap {...pageProps} />}</Route>
    <Route path="/learn">{() => <Learn {...pageProps} />}</Route>
    <Route path="/lesson/:lessonId">{() => <Lesson {...pageProps} />}</Route>
    <Route path="/practice">{() => <Practice {...pageProps} />}</Route>
    <Route path="/practice/first-paycheck">{() => <FirstPaycheck {...pageProps} />}</Route>
    <Route path="/progress">{() => <Progress {...pageProps} />}</Route>
    <Route path="/glossary">{() => <Glossary {...pageProps} />}</Route>
    <Route path="/profile">{() => <Profile {...pageProps} />}</Route>
    <Route component={NotFound} />
  </Switch>;
}
function App() {
  return <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}><RoutedApp /></WouterRouter>;
}
export default App;
