import React, { useState } from 'react';
import { Lock, Shield, Check, ArrowRight, Eye, EyeOff, AlertCircle } from 'lucide-react';

export default function ShadowSyncDemo() {
  const [currentScreen, setCurrentScreen] = useState('dashboard');
  const [borrowAmount, setBorrowAmount] = useState('25000000');
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [isMatching, setIsMatching] = useState(false);

  const screens = {
    dashboard: 'Dashboard',
    createRequest: 'Create Request',
    matching: 'Matching',
    active: 'Active Loan',
    privacy: 'Privacy Features'
  };

  const handleCreateRequest = () => {
    setCurrentScreen('createRequest');
  };

  const handleSubmitRequest = () => {
    setCurrentScreen('matching');
    setIsMatching(true);
    setTimeout(() => {
      setIsMatching(false);
      setCurrentScreen('active');
    }, 3000);
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%)',
      fontFamily: "'Inter', -apple-system, sans-serif",
      color: '#e5e7eb',
      padding: '2rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated background effect */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 20% 50%, rgba(16, 185, 129, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)',
        opacity: 0.5,
        pointerEvents: 'none'
      }}/>

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <header style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '3rem',
          padding: '1.5rem',
          background: 'rgba(255, 255, 255, 0.03)',
          backdropFilter: 'blur(10px)',
          borderRadius: '16px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{
              width: '48px',
              height: '48px',
              background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 12px rgba(16, 185, 129, 0.3)'
            }}>
              <Shield size={28} strokeWidth={2.5} />
            </div>
            <div>
              <h1 style={{ margin: 0, fontSize: '1.75rem', fontWeight: '700', letterSpacing: '-0.02em' }}>
                ShadowSync
              </h1>
              <p style={{ margin: 0, fontSize: '0.875rem', color: '#9ca3af' }}>
                Private Inter-Bank Liquidity Network
              </p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{
              padding: '0.5rem 1rem',
              background: 'rgba(16, 185, 129, 0.1)',
              borderRadius: '8px',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <Lock size={16} />
              <span style={{ fontSize: '0.875rem', fontWeight: '600' }}>Gold Tier</span>
            </div>
            <div style={{
              width: '40px',
              height: '40px',
              background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: '700'
            }}>
              A
            </div>
          </div>
        </header>

        {/* Navigation */}
        <nav style={{
          display: 'flex',
          gap: '0.5rem',
          marginBottom: '2rem',
          padding: '0.5rem',
          background: 'rgba(255, 255, 255, 0.03)',
          borderRadius: '12px',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          {Object.entries(screens).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setCurrentScreen(key)}
              style={{
                flex: 1,
                padding: '0.75rem 1rem',
                background: currentScreen === key ? 'rgba(16, 185, 129, 0.2)' : 'transparent',
                border: currentScreen === key ? '1px solid rgba(16, 185, 129, 0.4)' : '1px solid transparent',
                borderRadius: '8px',
                color: currentScreen === key ? '#10b981' : '#9ca3af',
                fontSize: '0.875rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                fontFamily: 'inherit'
              }}
              onMouseEnter={(e) => {
                if (currentScreen !== key) {
                  e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                }
              }}
              onMouseLeave={(e) => {
                if (currentScreen !== key) {
                  e.target.style.background = 'transparent';
                }
              }}
            >
              {label}
            </button>
          ))}
        </nav>

        {/* Screen Content */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.03)',
          backdropFilter: 'blur(10px)',
          borderRadius: '16px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          padding: '2rem',
          minHeight: '500px',
          animation: 'fadeIn 0.3s ease'
        }}>
          {currentScreen === 'dashboard' && <DashboardScreen onCreateRequest={handleCreateRequest} />}
          {currentScreen === 'createRequest' && <CreateRequestScreen onSubmit={handleSubmitRequest} amount={borrowAmount} setAmount={setBorrowAmount} />}
          {currentScreen === 'matching' && <MatchingScreen isMatching={isMatching} />}
          {currentScreen === 'active' && <ActiveLoanScreen amount={borrowAmount} />}
          {currentScreen === 'privacy' && <PrivacyScreen />}
        </div>

        {/* Footer */}
        <footer style={{
          marginTop: '2rem',
          textAlign: 'center',
          fontSize: '0.875rem',
          color: '#6b7280',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem'
        }}>
          <Shield size={16} />
          <span>Powered by Canton Network • Privacy-Preserving Settlement</span>
        </footer>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

function DashboardScreen({ onCreateRequest }) {
  return (
    <div>
      <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
        Bank A Dashboard
      </h2>

      {/* Stats Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
        <StatCard title="Available Liquidity" value="$100M" subtitle="Gold Tier Access" color="#10b981" />
        <StatCard title="Active Loans" value="2" subtitle="Total: $45M" color="#6366f1" />
        <StatCard title="Pool Contribution" value="$50M" subtitle="Earning 2.5% APY" color="#f59e0b" />
      </div>

      {/* Quick Actions */}
      <div style={{ marginTop: '2rem' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', color: '#d1d5db' }}>
          Quick Actions
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
          <ActionCard
            icon={<ArrowRight size={24} />}
            title="Borrow Liquidity"
            description="Request emergency funds"
            onClick={onCreateRequest}
            primary
          />
          <ActionCard
            icon={<Shield size={24} />}
            title="View Collateral"
            description="Manage assets"
          />
          <ActionCard
            icon={<Eye size={24} />}
            title="Privacy Settings"
            description="Control visibility"
          />
        </div>
      </div>

      {/* Privacy Indicator */}
      <div style={{
        marginTop: '2rem',
        padding: '1rem',
        background: 'rgba(16, 185, 129, 0.1)',
        borderRadius: '8px',
        border: '1px solid rgba(16, 185, 129, 0.3)',
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem'
      }}>
        <Lock size={20} color="#10b981" />
        <div>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '0.875rem' }}>
            All transactions are private and encrypted
          </p>
          <p style={{ margin: 0, fontSize: '0.75rem', color: '#9ca3af', marginTop: '0.25rem' }}>
            Your positions remain confidential from other network participants
          </p>
        </div>
      </div>
    </div>
  );
}

function CreateRequestScreen({ onSubmit, amount, setAmount }) {
  return (
    <div>
      <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>
        Create Borrow Request
      </h2>
      <p style={{ color: '#9ca3af', marginBottom: '2rem' }}>
        Request confidential liquidity from the ShadowSync network
      </p>

      <div style={{ maxWidth: '600px' }}>
        {/* Amount Input */}
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.5rem', color: '#d1d5db' }}>
            Loan Amount (USD)
          </label>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '8px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '0.75rem 1rem'
          }}>
            <span style={{ fontSize: '1.5rem', marginRight: '0.5rem' }}>$</span>
            <input
              type="text"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              style={{
                flex: 1,
                background: 'transparent',
                border: 'none',
                outline: 'none',
                fontSize: '1.5rem',
                fontWeight: '700',
                color: '#e5e7eb',
                fontFamily: "'JetBrains Mono', monospace"
              }}
            />
          </div>
        </div>

        {/* Duration */}
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.5rem', color: '#d1d5db' }}>
            Duration
          </label>
          <select style={{
            width: '100%',
            padding: '0.75rem 1rem',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '8px',
            color: '#e5e7eb',
            fontSize: '1rem',
            fontFamily: 'inherit'
          }}>
            <option>24 hours</option>
            <option>48 hours</option>
            <option>7 days</option>
            <option>30 days</option>
          </select>
        </div>

        {/* Collateral */}
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.5rem', color: '#d1d5db' }}>
            Collateral Offered
          </label>
          <div style={{
            padding: '1rem',
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '8px',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span style={{ color: '#9ca3af' }}>US Treasury Bonds</span>
              <span style={{ fontWeight: '700', fontFamily: "'JetBrains Mono', monospace" }}>$30,000,000</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: '#9ca3af' }}>Coverage Ratio</span>
              <span style={{ fontWeight: '700', color: '#10b981' }}>120%</span>
            </div>
          </div>
        </div>

        {/* Interest Rate */}
        <div style={{ marginBottom: '2rem' }}>
          <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.5rem', color: '#d1d5db' }}>
            Minimum Interest Rate (APR)
          </label>
          <input
            type="text"
            value="2.5%"
            readOnly
            style={{
              width: '100%',
              padding: '0.75rem 1rem',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '8px',
              color: '#e5e7eb',
              fontSize: '1rem',
              fontFamily: "'JetBrains Mono', monospace"
            }}
          />
        </div>

        {/* Privacy Notice */}
        <div style={{
          padding: '1rem',
          background: 'rgba(16, 185, 129, 0.1)',
          borderRadius: '8px',
          border: '1px solid rgba(16, 185, 129, 0.3)',
          marginBottom: '1.5rem',
          display: 'flex',
          gap: '0.75rem'
        }}>
          <EyeOff size={20} color="#10b981" style={{ flexShrink: 0, marginTop: '0.125rem' }} />
          <div>
            <p style={{ margin: 0, fontSize: '0.875rem', fontWeight: '600', color: '#10b981' }}>
              Private Request
            </p>
            <p style={{ margin: 0, fontSize: '0.75rem', color: '#9ca3af', marginTop: '0.25rem' }}>
              Only approved lenders with matching criteria will see this request. Your identity remains confidential.
            </p>
          </div>
        </div>

        {/* Submit Button */}
        <button
          onClick={onSubmit}
          style={{
            width: '100%',
            padding: '1rem',
            background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
            border: 'none',
            borderRadius: '8px',
            color: 'white',
            fontSize: '1rem',
            fontWeight: '700',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            transition: 'transform 0.2s ease',
            fontFamily: 'inherit',
            boxShadow: '0 4px 12px rgba(16, 185, 129, 0.3)'
          }}
          onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
          onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
        >
          <span>Submit Request</span>
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}

function MatchingScreen({ isMatching }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '400px' }}>
      {isMatching ? (
        <>
          <div style={{
            width: '80px',
            height: '80px',
            border: '4px solid rgba(16, 185, 129, 0.2)',
            borderTop: '4px solid #10b981',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            marginBottom: '2rem'
          }} />
          <h2 style={{ fontSize: '1.75rem', fontWeight: '700', marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>
            Finding Liquidity Provider
          </h2>
          <p style={{ color: '#9ca3af', textAlign: 'center', maxWidth: '400px', marginBottom: '2rem' }}>
            Searching encrypted network for matching lenders...
          </p>
          <div style={{
            display: 'flex',
            gap: '0.5rem'
          }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', animation: 'pulse 1.5s ease-in-out infinite' }} />
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', animation: 'pulse 1.5s ease-in-out 0.2s infinite' }} />
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', animation: 'pulse 1.5s ease-in-out 0.4s infinite' }} />
          </div>
        </>
      ) : (
        <>
          <div style={{
            width: '80px',
            height: '80px',
            background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '2rem',
            boxShadow: '0 8px 24px rgba(16, 185, 129, 0.4)'
          }}>
            <Check size={48} strokeWidth={3} />
          </div>
          <h2 style={{ fontSize: '1.75rem', fontWeight: '700', marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>
            Match Found!
          </h2>
          <p style={{ color: '#9ca3af', textAlign: 'center', maxWidth: '400px', marginBottom: '2rem' }}>
            Lender matched. Executing atomic settlement...
          </p>
          <div style={{
            padding: '1.5rem',
            background: 'rgba(16, 185, 129, 0.1)',
            borderRadius: '12px',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            maxWidth: '400px',
            width: '100%'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
              <span style={{ color: '#9ca3af' }}>Lender Identity</span>
              <span style={{ fontWeight: '600', color: '#10b981' }}>●●●●●● (Encrypted)</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
              <span style={{ color: '#9ca3af' }}>Interest Rate</span>
              <span style={{ fontWeight: '700', fontFamily: "'JetBrains Mono', monospace" }}>2.75% APR</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: '#9ca3af' }}>Settlement Status</span>
              <span style={{ fontWeight: '600', color: '#10b981' }}>✓ Atomic</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

function ActiveLoanScreen({ amount }) {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '2rem' }}>
        <div>
          <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>
            Active Loan
          </h2>
          <p style={{ color: '#9ca3af' }}>Loan ID: #SS-2024-001247</p>
        </div>
        <div style={{
          padding: '0.5rem 1rem',
          background: 'rgba(16, 185, 129, 0.2)',
          borderRadius: '8px',
          border: '1px solid rgba(16, 185, 129, 0.4)',
          fontWeight: '600',
          color: '#10b981',
          fontSize: '0.875rem'
        }}>
          ● Active
        </div>
      </div>

      {/* Loan Details */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
        <LoanDetailCard title="Principal Amount" value={`$${(parseInt(amount) / 1000000).toFixed(1)}M`} subtitle="USD" />
        <LoanDetailCard title="Interest Rate" value="2.75%" subtitle="APR" />
        <LoanDetailCard title="Time Remaining" value="23h 45m" subtitle="of 24 hours" />
        <LoanDetailCard title="Total Repayment" value={`$${(parseInt(amount) * 1.0000761 / 1000000).toFixed(2)}M`} subtitle="Principal + Interest" />
      </div>

      {/* Collateral Status */}
      <div style={{
        padding: '1.5rem',
        background: 'rgba(255, 255, 255, 0.05)',
        borderRadius: '12px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        marginBottom: '2rem'
      }}>
        <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem', color: '#d1d5db' }}>
          Collateral Status
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div>
            <p style={{ margin: 0, fontSize: '0.875rem', color: '#9ca3af', marginBottom: '0.25rem' }}>Locked Assets</p>
            <p style={{ margin: 0, fontSize: '1.25rem', fontWeight: '700', fontFamily: "'JetBrains Mono', monospace" }}>$30,000,000</p>
          </div>
          <div>
            <p style={{ margin: 0, fontSize: '0.875rem', color: '#9ca3af', marginBottom: '0.25rem' }}>Coverage Ratio</p>
            <p style={{ margin: 0, fontSize: '1.25rem', fontWeight: '700', color: '#10b981' }}>120%</p>
          </div>
          <div>
            <p style={{ margin: 0, fontSize: '0.875rem', color: '#9ca3af', marginBottom: '0.25rem' }}>Asset Type</p>
            <p style={{ margin: 0, fontSize: '1rem', fontWeight: '600' }}>US Treasury Bonds</p>
          </div>
          <div>
            <p style={{ margin: 0, fontSize: '0.875rem', color: '#9ca3af', marginBottom: '0.25rem' }}>Health Factor</p>
            <p style={{ margin: 0, fontSize: '1.25rem', fontWeight: '700', color: '#10b981' }}>✓ Healthy</p>
          </div>
        </div>
      </div>

      {/* Privacy Notice */}
      <div style={{
        padding: '1rem',
        background: 'rgba(99, 102, 241, 0.1)',
        borderRadius: '8px',
        border: '1px solid rgba(99, 102, 241, 0.3)',
        display: 'flex',
        gap: '0.75rem'
      }}>
        <Shield size={20} color="#6366f1" style={{ flexShrink: 0, marginTop: '0.125rem' }} />
        <div>
          <p style={{ margin: 0, fontSize: '0.875rem', fontWeight: '600', color: '#818cf8' }}>
            Privacy Protected
          </p>
          <p style={{ margin: 0, fontSize: '0.75rem', color: '#9ca3af', marginTop: '0.25rem' }}>
            Lender identity and transaction details remain confidential. Atomic settlement completed successfully.
          </p>
        </div>
      </div>

      {/* Action Button */}
      <button style={{
        marginTop: '2rem',
        padding: '1rem 2rem',
        background: 'rgba(255, 255, 255, 0.05)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '8px',
        color: '#e5e7eb',
        fontSize: '0.875rem',
        fontWeight: '600',
        cursor: 'pointer',
        fontFamily: 'inherit',
        transition: 'all 0.2s ease'
      }}
      onMouseEnter={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.08)'}
      onMouseLeave={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.05)'}
      >
        Early Repayment Available
      </button>
    </div>
  );
}

function PrivacyScreen() {
  return (
    <div>
      <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
        Privacy Features
      </h2>
      <p style={{ color: '#9ca3af', marginBottom: '2rem', fontSize: '1.125rem' }}>
        How ShadowSync protects your financial data
      </p>

      <div style={{ display: 'grid', gap: '1.5rem' }}>
        <PrivacyFeatureCard
          icon={<Lock size={32} />}
          title="Encrypted Transactions"
          description="All borrowing and lending requests are encrypted using Canton Network's confidential channels. Only authorized counterparties can view transaction details."
          color="#10b981"
        />
        <PrivacyFeatureCard
          icon={<EyeOff size={32} />}
          title="Hidden Identities"
          description="Borrower and lender identities remain anonymous unless explicitly disclosed. Network participants only see encrypted matching data."
          color="#6366f1"
        />
        <PrivacyFeatureCard
          icon={<Shield size={32} />}
          title="Atomic Settlement"
          description="Multi-party transactions execute atomically or rollback entirely. No partial executions or exposed intermediate states."
          color="#8b5cf6"
        />
        <PrivacyFeatureCard
          icon={<AlertCircle size={32} />}
          title="Regulatory Compliance"
          description="Selective disclosure enables regulatory auditing without compromising market participant privacy. KYC verified institutions only."
          color="#f59e0b"
        />
      </div>

      {/* Technical Details */}
      <div style={{
        marginTop: '2rem',
        padding: '1.5rem',
        background: 'rgba(255, 255, 255, 0.05)',
        borderRadius: '12px',
        border: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem', color: '#d1d5db' }}>
          Technical Implementation
        </h3>
        <ul style={{ margin: 0, paddingLeft: '1.5rem', color: '#9ca3af', lineHeight: '1.8' }}>
          <li>Canton Network privacy-preserving settlement layer</li>
          <li>Daml smart contracts for atomic multi-party transactions</li>
          <li>Zero-knowledge proofs for creditworthiness verification</li>
          <li>End-to-end encrypted participant communication</li>
          <li>Confidential querying via Participant Query Store (PQS)</li>
        </ul>
      </div>
    </div>
  );
}

// Helper Components
function StatCard({ title, value, subtitle, color }) {
  return (
    <div style={{
      padding: '1.5rem',
      background: 'rgba(255, 255, 255, 0.05)',
      borderRadius: '12px',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      transition: 'transform 0.2s ease'
    }}
    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
    >
      <p style={{ margin: 0, fontSize: '0.875rem', color: '#9ca3af', marginBottom: '0.5rem' }}>{title}</p>
      <p style={{ margin: 0, fontSize: '2rem', fontWeight: '700', color, fontFamily: "'JetBrains Mono', monospace", marginBottom: '0.25rem' }}>{value}</p>
      <p style={{ margin: 0, fontSize: '0.75rem', color: '#6b7280' }}>{subtitle}</p>
    </div>
  );
}

function ActionCard({ icon, title, description, onClick, primary }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '1.5rem',
        background: primary ? 'rgba(16, 185, 129, 0.1)' : 'rgba(255, 255, 255, 0.05)',
        border: primary ? '1px solid rgba(16, 185, 129, 0.3)' : '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '12px',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        textAlign: 'left',
        fontFamily: 'inherit',
        color: 'inherit'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.background = primary ? 'rgba(16, 185, 129, 0.15)' : 'rgba(255, 255, 255, 0.08)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.background = primary ? 'rgba(16, 185, 129, 0.1)' : 'rgba(255, 255, 255, 0.05)';
      }}
    >
      <div style={{ color: primary ? '#10b981' : '#9ca3af', marginBottom: '0.75rem' }}>{icon}</div>
      <h4 style={{ margin: 0, fontSize: '1rem', fontWeight: '600', marginBottom: '0.25rem', color: '#e5e7eb' }}>{title}</h4>
      <p style={{ margin: 0, fontSize: '0.875rem', color: '#9ca3af' }}>{description}</p>
    </button>
  );
}

function LoanDetailCard({ title, value, subtitle }) {
  return (
    <div style={{
      padding: '1.5rem',
      background: 'rgba(255, 255, 255, 0.05)',
      borderRadius: '12px',
      border: '1px solid rgba(255, 255, 255, 0.1)'
    }}>
      <p style={{ margin: 0, fontSize: '0.875rem', color: '#9ca3af', marginBottom: '0.5rem' }}>{title}</p>
      <p style={{ margin: 0, fontSize: '1.75rem', fontWeight: '700', fontFamily: "'JetBrains Mono', monospace", marginBottom: '0.25rem' }}>{value}</p>
      <p style={{ margin: 0, fontSize: '0.75rem', color: '#6b7280' }}>{subtitle}</p>
    </div>
  );
}

function PrivacyFeatureCard({ icon, title, description, color }) {
  return (
    <div style={{
      padding: '1.5rem',
      background: 'rgba(255, 255, 255, 0.05)',
      borderRadius: '12px',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      display: 'flex',
      gap: '1rem',
      transition: 'transform 0.2s ease'
    }}
    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(8px)'}
    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}
    >
      <div style={{ color, flexShrink: 0 }}>{icon}</div>
      <div>
        <h4 style={{ margin: 0, fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.5rem', color: '#e5e7eb' }}>{title}</h4>
        <p style={{ margin: 0, fontSize: '0.875rem', color: '#9ca3af', lineHeight: '1.6' }}>{description}</p>
      </div>
    </div>
  );
}