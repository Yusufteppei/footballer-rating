import pickle

model = pickle.load(open('model.pickle', 'rb'))

def predict(abilities):
    ovr = model.predict(abilities)[0]
    with open('ovr.txt', 'w') as f:
        f.write(ovr)
    return ovr

predict([[29, 23, 70, 51, 21, 41, 26, 24, 46, 49, 45, 49, 34, 59, 37, 36, 32,
       59, 86, 24, 65, 67, 17, 25, 26, 56, 65, 69, 66]])